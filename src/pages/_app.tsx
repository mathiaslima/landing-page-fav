import React from 'react';
import type { AppProps } from 'next/app'

import GlobalStyle from "../styles/global"
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )

}

export default MyApp
