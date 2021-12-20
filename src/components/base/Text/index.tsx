import type { ReactElement } from 'react';
import { StyledText } from './styled';
import type { TextProps } from './types';

const Text = ({
  children,
  size,
  color,
  backgroundColor,
  bold,
  block,
  dangerously = false,
  ...props
}: TextProps): ReactElement => {
  if (dangerously && children) {
    return (
      <StyledText
        backgroundColor={backgroundColor}
        block={block}
        bold={bold}
        color={color}
        dangerouslySetInnerHTML={{ __html: `${children}` }}
        size={size}
        {...props}
      ></StyledText>
    );
  }
  return (
    <StyledText
      backgroundColor={backgroundColor}
      block={block}
      bold={bold}
      color={color}
      size={size}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
