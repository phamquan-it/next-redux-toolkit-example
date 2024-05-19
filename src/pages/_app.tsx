import "@/styles/globals.css";
// pages/_app.tsx
import { AppProps } from 'next/app';
import ReduxProvider from '../redux/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}

export default MyApp;
