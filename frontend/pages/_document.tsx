import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument(): React.ReactElement {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Noto+Sans+JP:400,500,700|Noto+Sans+KR:400,500,700|Roboto:400,500,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default MyDocument;
