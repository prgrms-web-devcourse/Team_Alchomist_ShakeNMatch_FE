import type { ReactElement } from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

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

type StyledImgProps = Pick<ImageProps, 'width' | 'height' | 'mode' | 'block'>;

const StyledImg = styled.img<StyledImgProps>`
  display: ${({ block }): string | undefined => (block ? 'block' : undefined)};
  object-fit: ${({ mode }): string => (mode ? mode : 'cover')};
  width: ${({ width }): string => width};
  height: ${({ height }): string => height};
`;

const LOAD_IMG_EVENT = 'loadImage';
const DEFAULT_THRESHOLD = 0.3;

let observer: IntersectionObserver | null;

const onIntersection = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
): void => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT));
    }
  });
};

const Image = ({
  lazy = true,
  src,
  width,
  height,
  alt,
  mode = 'cover',
  block = false,
  placeholder = 'https://via.placeholder.com/300',
  threshold = DEFAULT_THRESHOLD
}: ImageProps): ReactElement => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImg = (): void => {
      setLoaded(true);
    };

    const imgElement = imgRef.current;
    if (imgElement) {
      imgElement.addEventListener(LOAD_IMG_EVENT, handleLoadImg);
    }

    return (): void => {
      if (imgElement) {
        imgElement.removeEventListener(LOAD_IMG_EVENT, handleLoadImg);
      }
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, [lazy, threshold]);

  return (
    <StyledImg
      ref={imgRef}
      alt={alt}
      block={block}
      height={height}
      mode={mode}
      src={loaded ? src : placeholder}
      width={width}
    />
  );
};

export default Image;
