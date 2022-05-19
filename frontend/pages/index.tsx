import React from 'react';
import {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
} from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config';
import styled from 'styled-components';
import Main from '@/features/main/Main';
import Footer from '@/features/common/footer/Footer';

const StyledSection = styled.section`
    min-height: 100vh;
    overflow: hidden;
    flex-grow: 1;
`;

type PropsType = IUserAgent & SSRConfig;

interface IUserAgent {
    userAgent: string | undefined;
}

function App({ userAgent }: PropsType) {
    return (
        <StyledSection>
            <Main userAgent={userAgent} />
            <Footer />
        </StyledSection>
    );
}

export const getServerSideProps = async ({
    req,
    locale,
    defaultLocale,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PropsType>> => {
    return {
        props: {
            userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
            ...(await serverSideTranslations(
                locale || (defaultLocale as string),
                ['main', 'login'],
                nextI18NextConfig
            )),
        },
    };
};

export default App;
