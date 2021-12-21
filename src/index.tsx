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
            font-family: 'Do Hyeon', sans-serif;
            /* font-family: 'Sunflower', sans-serif; */
            word-break: keep-all;
          }
          #root {
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
