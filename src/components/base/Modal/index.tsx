import type { ReactElement } from 'react';
import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from './type';
import { StyledModalBackground, StyledModalContainer } from './styled';

const Modal = ({
  children,
  width,
  height,
  color,
  visible
}: ModalProps): ReactElement => {
  const topLevelDiv: HTMLDivElement = useMemo(
    () => document.createElement('div'),
    []
  );

  useEffect(() => {
    document.body.appendChild(topLevelDiv);
    return (): void => {
      document.body.removeChild(topLevelDiv);
    };
  }, []);

  return ReactDOM.createPortal(
    <StyledModalBackground visible={visible}>
      <StyledModalContainer color={color} height={height} width={width}>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>,
    topLevelDiv
  );
};

export default Modal;
