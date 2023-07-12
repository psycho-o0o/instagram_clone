import React from 'react';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import Profile from '@/fragments/ProfileImage';
import {
  Wrapper,
  Wrap,
  TitleWrapper,
  TitleWrap,
  ProfileImageWrapper,
  ProfileNameWrapper,
  ProfileNameWrap,
  DetailWrapper,
  ContentWrapper,
  SubContentWrapper,
  FunctionWrapper,
  FunctionButtonWrapper,
  FunctionButtonWrap,
  GoodCountWrapper,
  ExplanationWrapper,
} from './Feed.style';

function Feed() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Wrap>
        <TitleWrapper colors={theme.colors}>
          <TitleWrap>
            <div>
              <ProfileImageWrapper>
                <Link href="#jangdonggun">
                  <a>
                    <Profile src="/images/profile.jpg" width={32} height={32} />
                  </a>
                </Link>
              </ProfileImageWrapper>
              <ProfileNameWrapper>
                <ProfileNameWrap colors={theme.colors}>
                  <Link href="#jangdonggun">Psycho-o0o</Link>
                </ProfileNameWrap>
              </ProfileNameWrapper>
            </div>
            <div>
              <DetailWrapper>
                <Image src="/images/icon/detail.svg" width={24} height={24} />
              </DetailWrapper>
            </div>
          </TitleWrap>
        </TitleWrapper>
        <ContentWrapper>
          <Image src="/images/content/content1.jpg" layout="fill" />
        </ContentWrapper>
        <SubContentWrapper>
          <FunctionWrapper>
            <div>
              <FunctionButtonWrapper>
                <FunctionButtonWrap>
                  <Image src="/images/icon/good.svg" width={24} height={24} />
                </FunctionButtonWrap>
              </FunctionButtonWrapper>
              <FunctionButtonWrapper>
                <FunctionButtonWrap>
                  <Image
                    src="/images/icon/comment.svg"
                    width={24}
                    height={24}
                  />
                </FunctionButtonWrap>
              </FunctionButtonWrapper>
              <FunctionButtonWrapper>
                <FunctionButtonWrap>
                  <Image
                    src="/images/icon/directMessage.svg"
                    width={24}
                    height={24}
                  />
                </FunctionButtonWrap>
              </FunctionButtonWrapper>
            </div>
            <div>
              <FunctionButtonWrapper>
                <FunctionButtonWrap>
                  <Image
                    src="/images/icon/bookMark.svg"
                    width={24}
                    height={24}
                  />
                </FunctionButtonWrap>
              </FunctionButtonWrapper>
            </div>
          </FunctionWrapper>
          <GoodCountWrapper colors={theme.colors}>
            <span>좋아요 o0o개</span>
          </GoodCountWrapper>
          <ExplanationWrapper>
            <div className="text">
              <ProfileNameWrapper>
                <ProfileNameWrap colors={theme.colors}>
                  <Link href="#jangdonggun">Psycho-o0o</Link>
                </ProfileNameWrap>
              </ProfileNameWrapper>
              벚꽃구경중
            </div>
            <div className="hash">#벚꽃 #한강</div>
          </ExplanationWrapper>
        </SubContentWrapper>
      </Wrap>
    </Wrapper>
  );
}

export default Feed;
