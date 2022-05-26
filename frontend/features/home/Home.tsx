import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import {
    Wrapper,
    HeaderWrapper,
    HeaderWrap,
    CameraButtonWrapper,
    CameraButton,
    SendMessageWrapper,
    FeedWrapper,
    InstagramLogoWrap,
    InstagramLogoWrapper,
    StoryWrap,
    StoryWrapper,
} from './Home.style';
import Feed from '../common/feed/Feed';
import Menu from '../common/menu/Menu';

function Home() {
    const theme = useTheme();
    return (
        <Wrapper>
            <HeaderWrapper>
                <HeaderWrap>
                    <CameraButtonWrapper>
                        <CameraButton>
                            <Image
                                src="/images/icon/camera.svg"
                                width={24}
                                height={24}
                            />
                        </CameraButton>
                    </CameraButtonWrapper>
                    <InstagramLogoWrapper>
                        <InstagramLogoWrap>
                            <Link href="/">
                                <Image
                                    src="/images/logo/instagram.png"
                                    width={103}
                                    height={29}
                                    quality={100}
                                />
                            </Link>
                        </InstagramLogoWrap>
                    </InstagramLogoWrapper>
                    <SendMessageWrapper>
                        <Link href="/direct/inbox">
                            <Image
                                src="/images/icon/direct.svg"
                                width={24}
                                height={24}
                            />
                        </Link>
                    </SendMessageWrapper>
                </HeaderWrap>
            </HeaderWrapper>
            <main>
                <StoryWrapper colors={theme.colors}>
                    <StoryWrap>
                      
                    </StoryWrap>
                </StoryWrapper>
                <FeedWrapper>
                    <Feed />
                </FeedWrapper>
            </main>
            {/* <Menu /> */}
        </Wrapper>
    );
}

export default Home;
