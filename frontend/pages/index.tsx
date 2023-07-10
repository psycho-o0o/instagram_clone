import React, { useEffect } from 'react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import parser from 'ua-parser-js';
import nextI18NextConfig from '../next-i18next.config';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import MobileMain from '@/features/main/MobileMain';
import DesktopMain from '@/features/main/DesktopMain';
import { CheckApi } from '@/features/user/user.slice';
import Footer from '@/features/common/footer/Footer';

const StyledSection = styled.section`
  min-height: 100vh;
  overflow: hidden;
  flex-grow: 1;
`;

interface IUserAgent {
  userAgent: string | undefined;
}

type PropsType = IUserAgent & SSRConfig;

function App({ userAgent }: PropsType) {
  const router = useRouter();
  const ua = parser(userAgent);
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector((state) => ({
    isLogin: state.user.isLogin,
  }));

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt !== null) {
      dispatch(CheckApi({ jwt }));
    }

    if (isLogin) {
      router.push('/home');
    }
  }, [isLogin]);

  if (isLogin) return <div />;
  return (
    <StyledSection>
      {ua.device.type === 'mobile' ? (
        <MobileMain os={ua.os.name} />
      ) : (
        <DesktopMain />
      )}
      <Footer />
    </StyledSection>
  );
}

export const getServerSideProps = async ({
  req,
  locale,
  defaultLocale,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<PropsType>
> => ({
  props: {
    userAgent: req ? req.headers['user-agent'] : navigator.userAgent,
    ...(await serverSideTranslations(
      locale || (defaultLocale as string),
      ['main', 'login', 'register', 'footer'],
      nextI18NextConfig
    )),
  },
});

export default App;
