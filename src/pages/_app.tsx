import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { productsStore } from '../redux/store';
import { FavoriteContextProvider } from '../context/FavoritesContext';
import { GlobalStyle } from '../styled-components/GlobalStyle';
import { Header, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={productsStore}>
      <FavoriteContextProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </FavoriteContextProvider>
    </Provider>
  );
}

export default MyApp;