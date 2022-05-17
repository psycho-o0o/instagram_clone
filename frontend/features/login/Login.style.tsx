import styled, { DefaultTheme } from 'styled-components';

interface ILanguageWrapper {
    color: string;
}

export const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #fff;
    flex-grow: 1;
`;
export const StyledNav = styled.nav`
    margin: 16px 16px 6px;
`;
export const StyledArticle = styled.div`
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    margin: 0 auto;
    padding-bottom: 32px;
    width: 100%;
    max-width: 935px;
`;
export const MainWrapper = styled.div`
    padding-top: 100px;
    padding-bottom: 60px;
    max-width: 100%;
    justify-content: flex-start;
    padding: 10px 0;
`;
export const LogoWrapper = styled.div`
    margin-top: 36px;
    margin-bottom: 12px;
    flex: 0 0 auto;
`;
export const LogoWrap = styled.div`
    cursor: pointer;
    justify-content: center;
    align-items: center;
`;

export const SuggestionWrapper = styled.div<DefaultTheme>`
    &:nth-child(2n-1) {
        
    }
    & > .top {
        margin-top: 4px;
        margin-right: 40px;
        margin-left: 40px;
        flex: 0 0 auto;
        & > div {
            text-align: center;
            color: ${(props) => props.colors.gray};
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif;
        }
    }

    & > .middle {
        margin-top: 16px;
        margin-right: 40px;
        margin-left: 40px;
        flex: 0 0 auto;
        & > button {
            background-color: ${(props) => props.colors.skyBlue};
            border: 1px solid transparent;
            padding: 12px 18px;
            color: white;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            text-overflow: ellipsis;
            text-align: center;
        }
    }

    & > .bottom {
        margin-top: 20px;
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        justify-content: center;

        & > div,
        & > button {
            font-size: 14px;
            text-align: center;
            text-overflow: ellipsis;
            color: ${(props) => props.colors.gray};
        }
        & > div {
            margin: 0 4px;
            flex: 0 0 auto;
        }
        & > button {
            border: 0;
            padding: 0;
            background: 0 0;
            font-weight: 600;
            color: ${(props) => props.colors.skyBlue};
            display: inline-block;
        }
    }
`;

export const CompanyWrapper = styled.div`
    margin-bottom: 24px;
    flex: 0 0 auto;
`;
export const LanguageWrapper = styled.span<ILanguageWrapper>`
    color: ${(props) => props.color};
    font-size: 12px;
    width: 100%;

    select {
        left: 0;
        top: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
`;
export const LanguageWrap = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const ArrowWrapper = styled.div``;
export const ArrowWrap = styled.div``;
