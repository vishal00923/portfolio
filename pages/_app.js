import '../styles/globals.css';

import { AppProvider } from '../src/contexts/appContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
