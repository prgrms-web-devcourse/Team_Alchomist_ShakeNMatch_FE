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
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
          }
        `}
      />
      <Story />
    </>
  )
];
