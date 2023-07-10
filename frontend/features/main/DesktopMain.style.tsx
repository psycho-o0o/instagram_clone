import styled, { DefaultTheme } from 'styled-components';

export const Wrapper = styled.main<DefaultTheme>`
  background-color: ${(props) => props.colors.gray7};
  flex-grow: 1;
`;
export const Wrap = styled.article``;
