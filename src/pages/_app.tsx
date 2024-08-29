import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { productsStore } from '../redux/store';
import { CartContextProvider } from '../context/CartContext';
import {AuthProvider} from '../context/AuthContext';
import { GlobalStyle } from '../styled-components/GlobalStyle';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={productsStore}>
      <AuthProvider >
      <CartContextProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
