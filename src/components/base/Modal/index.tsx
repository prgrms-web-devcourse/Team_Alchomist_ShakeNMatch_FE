import type { ReactElement } from 'react';
import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from './types';
import { StyledModalBackground, StyledModalContainer } from './styled';
import useClickAway from '@hooks/useClickAway';

const Modal = ({
  children,
  size = 'md',
  color = 'BASIC_WHITE',
  backgroundColor = 'DARK_GRAY',
  visible = false,
  onClose
}: ModalProps): ReactElement => {
  const topLevelDiv: HTMLDivElement = useMemo(
    () => document.createElement('div'),
    []
  );

  const modalRef = useClickAway<HTMLDivElement>(() => {
    onClose?.();
  });

  useEffect(() => {
    document.body.appendChild(topLevelDiv);
    return (): void => {
      document.body.removeChild(topLevelDiv);
    };
  }, []);

  return ReactDOM.createPortal(
    <StyledModalBackground backgroundColor={backgroundColor} visible={visible}>
      <StyledModalContainer ref={modalRef} color={color} size={size}>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>,
    topLevelDiv
  );
};

export default Modal;
