import styled, { DefaultTheme } from 'styled-components';

export const StyledFooter = styled.footer<DefaultTheme>`
  background-color: ${(props) => props.colors.gray7};
  padding: 0 16px;
`;

export const MainWrapper = styled.div`
  margin-bottom: 2px;
  flex: 0 0 auto;
`;

export const MainWrap = styled.div`
  margin-top: 24px;
  flex: 0 0 auto;

  & > div {
    flex-wrap: wrap;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: center;
  }
`;

export const TagWrapper = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 12px;
  flex: 0 0 auto;
`;

export const TagWrap = styled.div<DefaultTheme>`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin: -2px 0 -3px;
  color: ${(props) => props.colors.gray1};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;
