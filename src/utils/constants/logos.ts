import logoSmSrc from '@assets/logo/logo_sm.png';
import logoMdSrc from '@assets/logo/logo_md.png';
import logoLgSrc from '@assets/logo/logo_lg.png';

const LOGO = {
  sm: logoSmSrc,
  md: logoMdSrc,
  lg: logoLgSrc
} as const;

const LOGO_SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
} as const;

export { LOGO, LOGO_SIZE };
