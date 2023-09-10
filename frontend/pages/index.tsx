import React from 'react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { SSRConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import parser from 'ua-parser-js';
import nextI18NextConfig from '../next-i18next.config';
import MobileMain from '@/features/main/MobileMain';
import Footer from '@/features/common/footer/Footer';
import { checkJWT } from '@/utils/checkJWT';

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
  const ua = parser(userAgent);
  const isOnLogin = checkJWT();

  if (isOnLogin) return <div />;
  return (
    <StyledSection>
      <MobileMain os={ua.os.name} />
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
