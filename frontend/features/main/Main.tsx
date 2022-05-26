import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next';
import { CheckApi } from '@/features/user/user.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import parser from 'ua-parser-js';
import { useTheme } from 'styled-components';
import Login from './login/Login';
import Register from './register/Register';
import { DownOutlined } from '@ant-design/icons';
import {
    StyledMain,
    StyledNav,
    StyledArticle,
    CompanyWrapper,
    ArrowWrap,
    ArrowWrapper,
    LanguageWrap,
    LanguageWrapper,
    MainWrapper,
    LogoWrap,
    LogoWrapper,
    SuggestionWrapper,
    DownLoadAppButton,
} from './Main.style';

interface IProps {
    userAgent: string | undefined;
}

function Main({ userAgent }: IProps) {
    const theme = useTheme();
    const ua = parser(userAgent);
    const { t } = useTranslation('main');
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { isLogin } = useAppSelector((state) => ({
        isLogin: state.user.isLogin,
    }));
    const [isClickedLogin, setIsClickedLogin] = useState(false);
    const [isClickedRegister, setIsClickedRegister] = useState(false);

    const onChangeLanguage = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            i18n?.changeLanguage(e.target.value);
        },
        [i18n]
    );

    const onClickDownloadApp = useCallback(() => {
        const [hl, gl] = i18n?.language.split('-') as string[];
        const googlePlayUrl = `https://play.google.com/store/apps/details?id=com.instagram.android&hl=${hl}&gl=${gl}`;
        const AppStoreUrl =
            'https://apps.apple.com/us/app/instagram/id389801252';
        if (window === undefined) {
            return;
        }

        if (ua.os.name === 'iOS') {
            window.open(AppStoreUrl, '__blank');
        } else {
            window.open(googlePlayUrl, '__blank');
        }
    }, [i18n?.language]);

    const onClickLogIn = useCallback(() => {
        setIsClickedLogin(true);
        setIsClickedRegister(false);
    }, []);

    const onClickRegister = useCallback(() => {
        setIsClickedRegister(true);
        setIsClickedLogin(false);
    }, []);

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

    return (
        <StyledMain>
            <StyledNav>
                <LanguageWrapper colors={theme.colors}>
                    <LanguageWrap>
                        <span>{t('selectLanguage')}</span>
                        <ArrowWrapper>
                            <ArrowWrap>
                                <DownOutlined />
                            </ArrowWrap>
                        </ArrowWrapper>
                    </LanguageWrap>
                    <select
                        aria-label="표시 언어 변경"
                        onChange={onChangeLanguage}
                        value={i18n?.language}
                    >
                        <option value="ko-KR">한국어</option>
                        <option value="en-US">English</option>
                    </select>
                </LanguageWrapper>
            </StyledNav>
            <StyledArticle>
                <MainWrapper
                    hideTopPadding={isClickedLogin || isClickedRegister}
                >
                    <LogoWrapper>
                        <LogoWrap>
                            <Image
                                src="/images/logo/instagram.png"
                                width={175}
                                height={51}
                                quality={100}
                                priority
                            ></Image>
                        </LogoWrap>
                    </LogoWrapper>
                    <SuggestionWrapper
                        colors={theme.colors}
                        hide={isClickedLogin || isClickedRegister}
                    >
                        <div className="top">
                            <div>{t('suggestion')}</div>
                        </div>
                        <div className="middle">
                            <DownLoadAppButton
                                colors={theme.colors}
                                onClick={onClickDownloadApp}
                            >
                                {t('downloadApp')}
                            </DownLoadAppButton>
                        </div>
                        <div className="bottom">
                            <button onClick={onClickLogIn}>{t('logIn')}</button>
                            <div>{t('or')}</div>
                            <button onClick={onClickRegister}>
                                {t('signUp')}
                            </button>
                        </div>
                    </SuggestionWrapper>
                    {isClickedLogin && (
                        <Login onClickRegister={onClickRegister} />
                    )}
                    {isClickedRegister && (
                        <Register onClickLogIn={onClickLogIn} />
                    )}
                </MainWrapper>
            </StyledArticle>
            <CompanyWrapper>
                <span aria-label="from Meta" />
            </CompanyWrapper>
        </StyledMain>
    );
}

export default Main;
