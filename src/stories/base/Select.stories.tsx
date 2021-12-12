import Select from '@base/Select';
import { USER_MBTI } from '@constants';
import type { ReactElement } from 'react';

export default {
  title: 'Component/Base/Select',
  component: Select
};

export const Default = (): ReactElement => (
  <Select
    onChange={(e): void => {
      console.log(e);
    }}
  >
    {USER_MBTI.map((mbti) => (
      <option key={mbti} value={mbti.toLowerCase()}>
        {mbti}
      </option>
    ))}
  </Select>
);
