import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import { i18n, useTranslation } from 'next-i18next';
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
} from './Login.style';

function Login() {
    const theme = useTheme();
    const { t } = useTranslation('login');
    const [language, setLanguage] = useState(i18n?.language || 'kr');

    const changeLanguage = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            setLanguage(e.target.value);
            i18n?.changeLanguage(e.target.value);
        },
        [i18n]
    );

    return (
        <StyledMain>
            <StyledNav>
                <LanguageWrapper color={theme.colors.gray}>
                    <LanguageWrap>
                        <span>{t('selectLanguage')}</span>
                        <ArrowWrapper>
                            <ArrowWrap></ArrowWrap>
                        </ArrowWrapper>
                    </LanguageWrap>
                    <select
                        aria-label="표시 언어 변경"
                        value={language}
                        onChange={changeLanguage}
                    >
                        <option value="kr">한국어</option>
                        <option value="en">English</option>
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
                            <div>
                               {t('suggestion')}
                            </div>
                        </div>
                        <div className="middle">
                            <button>
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
            <CompanyWrapper></CompanyWrapper>
        </StyledMain>
    );
}

export default Login;
