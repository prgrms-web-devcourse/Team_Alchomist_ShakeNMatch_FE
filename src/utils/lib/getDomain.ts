import { DOMAINS } from '@constants';
import type { IDomain } from '@models';

const getDomain = (pathname: string): IDomain => {
  const domain = pathname.split('/')[1];
  if (!Object.values(DOMAINS).includes(domain as IDomain))
    console.error(`there is no ${domain} domain!`);

  return domain as IDomain;
};

export { getDomain };
