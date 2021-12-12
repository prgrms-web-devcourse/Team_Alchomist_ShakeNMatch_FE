import { Text } from '@base';
import IconButton from '@compound/IconButton';
import type { HTMLAttributes, ReactElement } from 'react';

const BackButton = ({
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  return (
    <div {...props}>
      <IconButton name='arrowLeftWhite' />
      <Text bold color='BASIC_WHITE' size='md'>
        Go Back
      </Text>
    </div>
  );
};

export default BackButton;
