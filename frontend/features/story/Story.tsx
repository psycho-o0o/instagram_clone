import {
  ProfileImageWrap,
  ProfileNameWrap,
  ProfilePlusWrap,
} from './Story.style';
import React from 'react';
import Image from 'next/image';
import { IStory } from './Story.interface';
import { Wrapper, Wrap } from './Story.style';

export default function Story({ isHiddenPlus }: IStory): JSX.Element {
  return (
    <Wrapper>
      <Wrap>
        <ProfileImageWrap>
          <Image src="/images/profile.jpg" width={56} height={56} />
        </ProfileImageWrap>
        <ProfileNameWrap>내 스토리</ProfileNameWrap>
        <ProfilePlusWrap isHidden={isHiddenPlus}>
          <Image src="/images/icon/plus.png" width={16} height={16} />
        </ProfilePlusWrap>
      </Wrap>
    </Wrapper>
  );
}
