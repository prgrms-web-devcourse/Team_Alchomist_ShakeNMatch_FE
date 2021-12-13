import type { ChangeEventHandler, FormEventHandler } from 'react';
import { useCallback, useState } from 'react';

interface UseFormProps {
  initialValues: { [key: string]: any };
  validateOnChange?: boolean;
  onSubmit?(value: { [key: string]: any }): any;
  validateFn?(args: any): any;
}

interface UseFormReturnType {
  values: { [key: string]: any };
  errors: { [key: string]: any };
  isLoading: boolean;
  handleChange: ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  handleSubmit: FormEventHandler;
}

const useForm = ({
  initialValues, // 초기값
  validateOnChange = false, // onChange event시 validate 진행 여부
  onSubmit, // Submit 이벤트
  validateFn // validate 함수
}: UseFormProps): UseFormReturnType => {
  const [values, setValues] = useState(initialValues || {}); // Form 내부 값
  const [errors, setErrors] = useState<{ [key: string]: any }>({}); // validate Errors
  const [isLoading, setIsLoading] = useState(false); // submit 진행중 여부

  const handleChange: ChangeEventHandler<HTMLSelectElement | HTMLInputElement> =
    useCallback(
      (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        if (validateOnChange) {
          const newError = validateFn ? validateFn({ [name]: value }) : {}; // 변경 요소에 대한 validate
          setErrors((prevErrors) => {
            // 해당 name value에 error 가 없으면
            if (!Object.keys(newError).length) {
              delete prevErrors[name]; // 기존 error 객체에서 name property 삭제
            }
            return { ...prevErrors, ...newError }; // 새로운 error 객체 반환
          });
        }
      },
      [validateOnChange, validateFn, values]
    );

  const handleSubmit: FormEventHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validateFn ? validateFn(values) : {}; // 모든 요소에 대한 validate 진행
    // 모든 요소 validate 통과시
    if (!Object.keys(newErrors).length && onSubmit) {
      await onSubmit(values);
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return { values, errors, isLoading, handleChange, handleSubmit };
};

export default useForm;
