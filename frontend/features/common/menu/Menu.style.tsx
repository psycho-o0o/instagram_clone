import styled, { DefaultTheme } from 'styled-components';

export const FooterWrapper = styled.footer<DefaultTheme>`
    position: absolute;
    left: 0;
    right: 0;
    bottom : 0;
    height: 44px;
    background-color : white;
    border : 1px solid ${props => props.colors.gray4};
`;

export const FooterWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction : row;
    justify-content : space-between;
`

export const MenuWrapper = styled.div`
    min-height: 0;
    min-width: 0;
    flex : 1 1 auto;
    height: 100%;
    justify-content : center;
    align-items : center;
`