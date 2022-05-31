import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTheme } from 'styled-components';
import { LogoutApi } from '@/features/user/user.slice';
import { useAppDispatch } from '@/redux/hooks';
import { FooterWrapper, FooterWrap, MenuWrapper, LogoutButton } from './Menu.style';

function Menu() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const baseIconsUrl = '/images/icon';

  const onLogoutClick = useCallback(() => {
    dispatch(LogoutApi());
  }, []);

  return (
    <FooterWrapper colors={theme.colors}>
      <FooterWrap>
        <MenuWrapper>
          <Link href="#home">
            <a>
              <Image
                src={
                  router.pathname === '/'
                    ? `${baseIconsUrl}/home_selected.svg`
                    : `${baseIconsUrl}/home.svg`
                }
                width={24}
                height={24}
              />
            </a>
          </Link>
        </MenuWrapper>
        <MenuWrapper>
          <Link href="explore">
            <a>
              <Image
                src={
                  router.pathname === '/explore'
                    ? `${baseIconsUrl}/explore_selected.svg`
                    : `${baseIconsUrl}/explore.svg`
                }
                width={24}
                height={24}
              />
            </a>
          </Link>
        </MenuWrapper>
        <MenuWrapper>
          <Link href="upload">
            <a>
              <Image src="/images/icon/newPost.svg" width={24} height={24} />
            </a>
          </Link>
        </MenuWrapper>
        <MenuWrapper>
          <Link href="activity">
            <a>
              <Image
                src={
                  router.pathname === '/activity'
                    ? `${baseIconsUrl}/activity_selected.svg`
                    : `${baseIconsUrl}/activity.svg`
                }
                width={24}
                height={24}
              />
            </a>
          </Link>
        </MenuWrapper>
        <MenuWrapper>
          <LogoutButton onClick={onLogoutClick}>
            <Image src="/images/icon/logout.svg" width={24} height={24} />
          </LogoutButton>
        </MenuWrapper>
      </FooterWrap>
    </FooterWrapper>
  );
}

export default Menu;
