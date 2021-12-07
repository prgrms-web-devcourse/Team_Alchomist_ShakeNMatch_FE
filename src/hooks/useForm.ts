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
  initialValues,
  validateOnChange = false,
  onSubmit,
  validateFn
}: UseFormProps): UseFormReturnType => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: ChangeEventHandler<HTMLSelectElement | HTMLInputElement> =
    useCallback(
      (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        if (validateOnChange) {
          const newErrors = validateFn
            ? validateFn({ ...values, [name]: value })
            : {};
          setErrors(newErrors);
        }
      },
      [validateOnChange, validateFn, values]
    );

  const handleSubmit: FormEventHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validateFn ? validateFn(values) : {};
    if (!Object.keys(newErrors).length && onSubmit) {
      await onSubmit(values);
    }
    setErrors(newErrors);
    setIsLoading(false);
  };

  return { values, errors, isLoading, handleChange, handleSubmit };
};

export default useForm;
