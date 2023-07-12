import styled, { css } from 'styled-components';
import { IProfilePlusWrap } from './Story.interface';

export const Wrapper = styled.div`
  display: flex;
  height: 122px;
  padding: 0 4px;
  width: 80px;
  position: relative;
  -webkit-tap-highlight-color: transparent;
`;
export const Wrap = styled.button`
  border: 0;
  margin: 0;
  padding: 0;
  width: 64px;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  align-self: center;
  background: transparent;
`;

export const ProfileImageWrap = styled.div`
  width: 56px;
  height: 56px;
  margin: 4px auto 8px;
  border-radius: 50%;
  overflow: hidden;
`;
export const ProfileNameWrap = styled.div``;
export const ProfilePlusWrap = styled.div<IProfilePlusWrap>`
  border: 1px solid white;
  border-radius: 50%;
  position: absolute;
  top: 44px;
  right: 12px;

  ${(props) =>
    props.isHidden &&
    css`
      display: none;
    `}
`;
