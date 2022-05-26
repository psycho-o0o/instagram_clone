import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FooterWrapper, FooterWrap, MenuWrapper } from './Menu.style';

function Menu() {
    const router = useRouter();
    const baseIconsUrl = '/images/icon';

    return (
        <FooterWrapper>
            <FooterWrap>
                <MenuWrapper>
                    <Link href="#home">
                        <Image
                            src={
                                router.pathname === '/'
                                    ? `${baseIconsUrl}/home_selected.svg`
                                    : `${baseIconsUrl}/home.svg`
                            }
                            width={24}
                            height={24}
                        />
                    </Link>
                </MenuWrapper>
                <MenuWrapper>
                    <Link href="explore">
                        <Image
                            src={
                                router.pathname === '/explore'
                                    ? `${baseIconsUrl}/explore_selected.svg`
                                    : `${baseIconsUrl}/explore.svg`
                            }
                            width={24}
                            height={24}
                        />
                    </Link>
                </MenuWrapper>
                <MenuWrapper>
                    <Link href="upload">
                        <Image
                            src="/images/icon/newPost.svg"
                            width={24}
                            height={24}
                        />
                    </Link>
                </MenuWrapper>
                <MenuWrapper>
                    <Link href="activity">
                        <Image
                            src={
                                router.pathname === '/activity'
                                    ? `${baseIconsUrl}/activity_selected.svg`
                                    : `${baseIconsUrl}/activity.svg`
                            }
                            width={24}
                            height={24}
                        />
                    </Link>
                </MenuWrapper>
                <MenuWrapper>
                    <Link href="profile">
                        <Image
                            src={
                                router.pathname === '/profile'
                                    ? `${baseIconsUrl}${router.pathname}_selected.svg`
                                    : `${baseIconsUrl}${router.pathname}.svg`
                            }
                            width={24}
                            height={24}
                        />
                    </Link>
                </MenuWrapper>
            </FooterWrap>
        </FooterWrapper>
    );
}

export default Menu;