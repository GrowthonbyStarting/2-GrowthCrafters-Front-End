import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
import routes from './routes';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

const router = createBrowserRouter(routes);

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <React.StrictMode>
      <RecoilRoot>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider theme={defaultTheme}>
            <Reset />
            <GlobalStyle />
            <RouterProvider router={router} />
          </ThemeProvider>
        </React.Suspense>
      </RecoilRoot>
    </React.StrictMode>
  ));
}

main();
