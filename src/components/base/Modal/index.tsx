import type { ReactElement } from 'react';
import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { ModalProps } from './types';
import { StyledModalBackground, StyledModalContainer } from './styled';
import useClickAway from '@hooks/useClickAway';
import { COLOR, MODAL_SIZE } from '@constants';

const Modal = ({
  children,
  size = MODAL_SIZE.MD,
  color = COLOR.BASIC_WHITE,
  backgroundColor = COLOR.DARK_GRAY,
  visible = false,
  onClose,
  ...props
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
      <StyledModalContainer ref={modalRef} color={color} size={size} {...props}>
        {children}
      </StyledModalContainer>
    </StyledModalBackground>,
    topLevelDiv
  );
};

export default Modal;
