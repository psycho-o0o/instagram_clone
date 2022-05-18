import '../styles/globals.css';
import wrapper from 'redux/store';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(wrapper.withRedux(MyApp));
