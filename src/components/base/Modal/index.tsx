import type { ReactElement } from 'react';
import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from './types';
import { StyledModalBackground, StyledModalContainer } from './styled';

const Modal = ({
  children,
  size = 'md',
  color = 'BASIC_WHITE',
  backgroundColor = 'DARK_GRAY',
  visible = false
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
    <StyledModalBackground backgroundColor={backgroundColor} visible={visible}>
      <StyledModalContainer color={color} size={size}>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>,
    topLevelDiv
  );
};

export default Modal;
