import styled from '@emotion/styled';
import type { ReactElement, ReactNode } from 'react';
import { useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
  width?: string;
  height?: string;
  // color 타입은 추후 THEME_COLOR constants로 변경 예정
  color?: string;
  visible: boolean;
}
type BackgroundProps = Pick<ModalProps, 'visible'>;
type ContainerProps = Pick<
  ModalProps,
  'children' | 'width' | 'height' | 'color'
>;

const ModalBackground = styled.div<BackgroundProps>`
  display: ${({ visible }): string => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

// prop에 대해서는 임의로 설정한 값을 추후 Default 값들로 변경 예정
const ModalContainer = styled.div<ContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }): string => (width ? width : '100px')};
  height: ${({ height }): string => (height ? height : '100px')};
  background-color: ${({ color }): string => (color ? color : 'white')};
`;

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
    <ModalBackground visible={visible}>
      <ModalContainer color={color} height={height} width={width}>
        {children}
      </ModalContainer>
    </ModalBackground>,
    topLevelDiv
  );
};

export default Modal;
