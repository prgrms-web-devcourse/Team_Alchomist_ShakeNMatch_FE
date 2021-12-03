import type { ReactElement } from 'react';
import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from './types';
import { MODAL_SIZE } from './types';
import { StyledModalBackground, StyledModalContainer } from './styled';
import { THEME_COLOR } from '@constants/color';

const Modal = ({
  children,
  size = MODAL_SIZE.md,
  color = THEME_COLOR.primary,
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
    <StyledModalBackground visible={visible}>
      <StyledModalContainer color={color} size={size}>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>,
    topLevelDiv
  );
};

export default Modal;
