import React from 'react';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Login from '@/features/login/Login';
import styled from 'styled-components';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
}: GetStaticPropsContext): Promise<GetStaticPropsResult<SSRConfig>> => ({
    props: {
        ...(await serverSideTranslations(locale || 'kr', ['login'])),
    },
});

export default App;
