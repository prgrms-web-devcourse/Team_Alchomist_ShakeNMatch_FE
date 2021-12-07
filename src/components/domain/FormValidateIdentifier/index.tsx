import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Gage, Glass, WaterFlow } from './styled';
import type { FormValidateIdentifierProps } from './types';

const FormValidateIdentifier = ({
  totalTasksToDone,
  tasksDone,
  width = '100px',
  height = '200px',
  ...props
}: FormValidateIdentifierProps): ReactElement => {
  const flowRef = useRef<null | HTMLDivElement>(null);
  const [prevTasksDone, setPrevTasksDone] = useState(tasksDone);

  useEffect(() => {
    if (flowRef.current && tasksDone > 0 && tasksDone > prevTasksDone) {
      flowRef.current.style.animationPlayState = 'running';
    }
    setPrevTasksDone(tasksDone);
  }, [tasksDone, prevTasksDone]);

  useEffect(() => {
    const handleAnimationIteration = (): void => {
      if (flowRef.current) {
        flowRef.current.style.animationPlayState = 'paused';
      }
    };
    if (flowRef.current) {
      flowRef.current.addEventListener(
        'animationiteration',
        handleAnimationIteration
      );
    }

    return (): void =>
      flowRef.current?.removeEventListener(
        'animationiteration',
        handleAnimationIteration
      );
  }, [flowRef.current]);

  return (
    <div>
      <Glass
        className='glass'
        currentNum={tasksDone}
        fulfilledNum={totalTasksToDone}
        height={height}
        width={width}
        {...props}
      >
        <WaterFlow
          ref={flowRef}
          currentNum={tasksDone}
          fulfilledNum={totalTasksToDone}
          height={height}
          width={width}
        />
        <Gage
          currentNum={tasksDone}
          fulfilledNum={totalTasksToDone}
          height={height}
          width={width}
        />
      </Glass>
    </div>
  );
};

export default FormValidateIdentifier;
