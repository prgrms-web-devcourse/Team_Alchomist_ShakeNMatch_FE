import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Gage, Glass, WaterFlow } from './styled';
import type { FormValidateIdentifierProps } from './types';
import waterSoundSrc from '@assets/sounds/waterSound.mp3';
import shakeSoundSrc from '@assets/sounds/shakeSound.mp3';

const waterSound = new Audio(waterSoundSrc);
const shakeSound = new Audio(shakeSoundSrc);
waterSound.volume = 0.4;
shakeSound.volume = 0.4;

const FormValidateIdentifier = ({
  totalTasksToDone,
  tasksDone,
  width = '100px',
  height = '200px',
  ...props
}: FormValidateIdentifierProps): ReactElement => {
  const flowRef = useRef<null | HTMLDivElement>(null);
  const glassRef = useRef<null | HTMLDivElement>(null);
  const [prevTasksDone, setPrevTasksDone] = useState(tasksDone);

  useEffect(() => {
    if (flowRef.current && tasksDone > 0 && tasksDone > prevTasksDone) {
      flowRef.current.style.animationPlayState = 'running';
      waterSound.play();
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

  useEffect(() => {
    const handleShakeSound = (): void => {
      shakeSound.play();
    };

    if (glassRef.current) {
      glassRef.current.addEventListener('mouseover', handleShakeSound);
    }

    return (): void => {
      glassRef.current?.removeEventListener('mouseover', handleShakeSound);
    };
  }, [glassRef.current]);

  useEffect(() => {
    document.body.appendChild(waterSound);
    document.body.appendChild(shakeSound);

    return (): void => {
      document.body.removeChild(waterSound);
      document.body.removeChild(shakeSound);
    };
  }, []);

  return (
    <Glass
      ref={glassRef}
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
  );
};

export default FormValidateIdentifier;
