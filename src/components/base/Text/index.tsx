import type { ReactElement } from 'react';
import { StyledText } from './styled';
import type { TextProps } from './types';

const Text = ({
  children,
  dangerously = false,
  ...props
}: TextProps): ReactElement => {
  if (dangerously && children) {
    return (
      <StyledText
        dangerouslySetInnerHTML={{ __html: children }}
        {...props}
      ></StyledText>
    );
  }
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
