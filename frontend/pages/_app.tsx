import '../styles/global.css';
import wrapper from 'redux/store';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(wrapper.withRedux(MyApp), nextI18NextConfig);
