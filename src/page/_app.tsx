import { AppProps } from 'next/app';
import StoreProvider from '../redux/StoreProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const initialProducts = pageProps.Products || [];

  return (
    <StoreProvider initialProducts={initialProducts}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;