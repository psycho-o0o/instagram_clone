import React from 'react';
import { useTheme } from 'styled-components';
import {
    StyledFooter,
    MainWrapper,
    MainWrap,
    TagWrapper,
    TagWrap,
} from './Footer.style';

function Footer() {
    const theme = useTheme();
    return (
        <StyledFooter colors={theme.colors}>
            <MainWrapper>
                <MainWrap>
                    <div>
                        <TagWrapper>
                            <a
                                href="https://about.facebook.com/meta"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                <TagWrap colors={theme.colors}>Meta</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a
                                href="https://about.instagram.com/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                <TagWrap colors={theme.colors}>소개</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a
                                href="https://about.instagram.com/blog/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                <TagWrap colors={theme.colors}>블로그</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/about/jobs/">
                                <TagWrap colors={theme.colors}>채용 정보</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a
                                href="https://help.instagram.com/"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                <TagWrap colors={theme.colors}>도움말</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a
                                href="https://developers.facebook.com/docs/instagram"
                                rel="nofollow noopener noreferrer"
                                target="_blank"
                            >
                                <TagWrap colors={theme.colors}>API</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/legal/privacy/">
                                <TagWrap colors={theme.colors}>
                                    개인정보처리방침
                                </TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/legal/terms/">
                                <TagWrap colors={theme.colors}>약관</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/directory/profiles/">
                                <TagWrap colors={theme.colors}>
                                    인기 계정
                                </TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/directory/hashtags/">
                                <TagWrap colors={theme.colors}>
                                    해시태그
                                </TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/explore/locations/">
                                <TagWrap colors={theme.colors}>위치</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/web/lite/">
                                <TagWrap colors={theme.colors}>
                                    Instagram Life
                                </TagWrap>
                            </a>
                        </TagWrapper>
                    </div>
                    <div>
                        <TagWrapper>
                            <a href="/topics/dance-and-performance/">
                                <TagWrap colors={theme.colors}>댄스</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/topics/food-and-drink/">
                                <TagWrap colors={theme.colors}>식음료</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/topics/home-and-garden/">
                                <TagWrap colors={theme.colors}>
                                    집 및 정원
                                </TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/topics/music/">
                                <TagWrap colors={theme.colors}>음악</TagWrap>
                            </a>
                        </TagWrapper>
                        <TagWrapper>
                            <a href="/topics/visual-arts/">
                                <TagWrap colors={theme.colors}>
                                    시각 예술
                                </TagWrap>
                            </a>
                        </TagWrapper>
                    </div>
                </MainWrap>
            </MainWrapper>
        </StyledFooter>
    );
}

export default Footer;
