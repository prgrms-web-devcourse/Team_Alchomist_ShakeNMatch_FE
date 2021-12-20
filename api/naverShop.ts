const axios = require('axios');
import type { VercelRequest, VercelResponse } from '@vercel/node';

const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const REQUEST_URL = 'https://openapi.naver.com/v1/search/shop.json';

export default async (
  req: VercelRequest,
  res: VercelResponse
): Promise<void> => {
  const { query, display } = req.query;
  const { data } = await axios.get(REQUEST_URL, {
    params: {
      query,
      display
    },
    headers: {
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
    }
  });
  if (data) {
    res.status(200).send(JSON.stringify(data));
  } else {
    res.status(406).send('request failed');
  }
};
