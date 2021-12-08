import Image from '@base/Image';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base/Image',
  component: Image
};

interface ImageProps {
  lazy?: boolean;
  src: string | undefined;
  width: string;
  height: string;
  alt?: string;
  mode: 'cover' | 'fill' | 'contain';
  block?: boolean;
  placeholder?: string;
  threshold: number;
}

export const Default = ({
  src = 'https://picsum.photos/200',
  ...props
}: ImageProps): ReactElement => {
  return <Image src={src} {...props} />;
};
