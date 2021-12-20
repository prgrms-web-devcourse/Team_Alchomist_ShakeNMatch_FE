import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          *, *::after, *::before {
            box-sizing: border-box;
          }
          html,
          body {
            padding: 0;
            margin: 0;
            background: white;
            height: 100vh;
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
              'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
          }
          .sb-show-main.sb-main-padded {
            padding: 0;
          }
          #root {
            height: 100vh;
            width: 100%;
          }
        `}
      />
      <Story />
    </>
  )
];
