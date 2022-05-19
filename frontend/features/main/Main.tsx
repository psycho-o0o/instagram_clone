import React, { useCallback } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { i18n, useTranslation } from 'next-i18next';
import parser from 'ua-parser-js';
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
} from './Main.style';

interface IProps {
    userAgent: string | undefined;
}

function Main({ userAgent }: IProps) {
    const theme = useTheme();
    const ua = parser(userAgent);
    const { t } = useTranslation('main');

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
                <MainWrapper>
                    <LogoWrapper>
                        <LogoWrap>
                            <Image
                                src="/images/logo/instagram.png"
                                width={175}
                                height={51}
                                layout="fixed"
                                priority
                            ></Image>
                        </LogoWrap>
                    </LogoWrapper>
                    <SuggestionWrapper colors={theme.colors}>
                        <div className="top">
                            <div>{t('suggestion')}</div>
                        </div>
                        <div className="middle">
                            <button onClick={onClickDownloadApp}>
                                {t('downloadApp')}
                            </button>
                        </div>
                        <div className="bottom">
                            <button>{t('logIn')}</button>
                            <div>{t('or')}</div>
                            <button>{t('signUp')}</button>
                        </div>
                    </SuggestionWrapper>
                </MainWrapper>
            </StyledArticle>
            <CompanyWrapper>
                <span aria-label="from Meta" />
            </CompanyWrapper>
        </StyledMain>
    );
}

export default Main;
