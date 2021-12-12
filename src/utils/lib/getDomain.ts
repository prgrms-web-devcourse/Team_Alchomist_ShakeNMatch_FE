import { DOMAINS } from '@constants';
import type { IDomain } from '@models';

const getDomain = (pathname: string): IDomain => {
  const domain = pathname.split('/')[1];
  if (!Object.keys(DOMAINS).includes(domain))
    throw new Error(`There is no Domain of ${domain}!`);

  return domain as IDomain;
};

export { getDomain };
