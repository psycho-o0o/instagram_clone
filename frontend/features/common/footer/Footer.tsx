import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('footer');
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
                <TagWrap colors={theme.colors}>{t('meta')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a
                href="https://about.instagram.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <TagWrap colors={theme.colors}>{t('about')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a
                href="https://about.instagram.com/blog/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <TagWrap colors={theme.colors}>{t('blog')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/about/jobs/">
                <TagWrap colors={theme.colors}>{t('jobs')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a
                href="https://help.instagram.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <TagWrap colors={theme.colors}>{t('help')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a
                href="https://developers.facebook.com/docs/instagram"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <TagWrap colors={theme.colors}>{t('api')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/legal/privacy/">
                <TagWrap colors={theme.colors}>{t('privacy')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/legal/terms/">
                <TagWrap colors={theme.colors}>{t('terms')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/directory/profiles/">
                <TagWrap colors={theme.colors}>{t('topAccounts')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/directory/hashtags/">
                <TagWrap colors={theme.colors}>{t('hashtags')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/explore/locations/">
                <TagWrap colors={theme.colors}>{t('locations')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/web/lite/">
                <TagWrap colors={theme.colors}>{t('instgramLite')}</TagWrap>
              </a>
            </TagWrapper>
          </div>
          <div>
            <TagWrapper>
              <a href="/topics/dance-and-performance/">
                <TagWrap colors={theme.colors}>{t('dance')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/topics/food-and-drink/">
                <TagWrap colors={theme.colors}>{t('foodAndDrink')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/topics/home-and-garden/">
                <TagWrap colors={theme.colors}>{t('homeAndGarden')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/topics/music/">
                <TagWrap colors={theme.colors}>{t('music')}</TagWrap>
              </a>
            </TagWrapper>
            <TagWrapper>
              <a href="/topics/visual-arts/">
                <TagWrap colors={theme.colors}>{t('visualArts')}</TagWrap>
              </a>
            </TagWrapper>
          </div>
        </MainWrap>
      </MainWrapper>
    </StyledFooter>
  );
}

export default Footer;
