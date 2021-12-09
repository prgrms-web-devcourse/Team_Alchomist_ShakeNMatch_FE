import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
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
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
              'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
          }
        `}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
