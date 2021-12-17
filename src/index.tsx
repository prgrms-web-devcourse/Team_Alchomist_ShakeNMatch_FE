import { COLOR } from '@constants';
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
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          *::-webkit-scrollbar {
            display: none;
          }
          body {
            padding: 0;
            margin: 0;
            background: ${COLOR.IVORY};
            min-height: 100vh;
            width: 100%;
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
              'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
          }
          #root {
            margin: 0 100px;
            position: relative;
            height: 100vh;
            background-color: ${COLOR.IVORY};
          }
        `}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
