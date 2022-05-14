import '../styles/globals.css';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import wrapper from 'redux/store';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
    );
}

export default wrapper.withRedux(appWithTranslation(MyApp));
