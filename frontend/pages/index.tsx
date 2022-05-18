import React from 'react';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import Login from '@/features/login/Login';

const StyledSection = styled.section`
    min-height: 100vh;
    overflow: hidden;
    flex-grow: 1;
`;

function App() {
    return (
        <StyledSection>
            <Login />
        </StyledSection>
    );
}

export const getStaticProps = async ({
    locale,
    defaultLocale
}: GetStaticPropsContext): Promise<GetStaticPropsResult<SSRConfig>> => ({
    props: {
        ...(await serverSideTranslations(locale || defaultLocale as string, ['login'])),
    },
});

export default App;
