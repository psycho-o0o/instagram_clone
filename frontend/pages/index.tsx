import React from 'react';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config';
import styled from 'styled-components';
import Login from '@/features/login/Login';
import Footer from '@/features/footer/Footer';

const StyledSection = styled.section`
    min-height: 100vh;
    overflow: hidden;
    flex-grow: 1;
`;

function App() {
    return (
        <StyledSection>
            <Login />
            <Footer />
        </StyledSection>
    );
}

export const getStaticProps = async ({
    locale,
    defaultLocale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<SSRConfig>> => {
    return {
        props: {
            ...(await serverSideTranslations(
                locale || defaultLocale as string,
                ['login'],
                nextI18NextConfig
            )),
        },
    };
};

export default App;
