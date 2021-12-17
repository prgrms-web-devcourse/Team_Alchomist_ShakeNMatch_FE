import { Image } from '@base';
import styled from '@emotion/styled';

const StyledImage = styled(Image)`
  animation: shake 0.8s ease-in-out infinite;

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(5deg);
    }
    20% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(-5deg);
    }
    40% {
      transform: rotate(0deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0) scale(1.1);
    }
    100% {
      transform: rotate(-360deg) scale(1.1);
    }
  }

  &:hover {
    animation: rotate 0.5s ease-in-out infinite;
  }
`;

export { StyledImage };
