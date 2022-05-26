import React, { useEffect } from 'react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styled from 'styled-components';
import Main from '@/features/main/Main';
import { CheckApi } from '@/features/user/user.slice';
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
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isLogin, loading } = useAppSelector((state) => ({
        isLogin: state.user.isLogin,
        loading: state.user.loading,
    }));

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');

        if (isLogin) {
            router.push('/home');
            return;
        }
        if (jwt !== null) {
            dispatch(CheckApi({ jwt }));
        }
    }, [isLogin]);

    if (loading || isLogin) return <div></div>;
    else {
        return (
            <StyledSection>
                <Main userAgent={userAgent} />
                <Footer />
            </StyledSection>
        );
    }
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
                ['main', 'login', 'register'],
                nextI18NextConfig
            )),
        },
    };
};

export default App;
