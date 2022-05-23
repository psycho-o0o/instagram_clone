import styled, { DefaultTheme } from 'styled-components';
import { Button1 } from '@/fragments/Buttons';

interface IMainWrapperProps {
    hideTopPadding: boolean;
}

interface ISuggestionWrapperProps {
    hide : boolean
}

export const StyledMain = styled.main`
    min-height: 100vh;
    background-color: #fff;
    flex-grow: 1;
`;
export const StyledNav = styled.nav`
    margin: 16px 16px 6px;
`;
export const StyledArticle = styled.article`
    flex-grow: 1;
    margin: 0 auto;
    padding-bottom: 32px;
    width: 100%;
    max-width: 935px;
`;
export const MainWrapper = styled.div<IMainWrapperProps>`
    padding-top: ${(props) => (props.hideTopPadding ? '0px' : '100px')};
    padding-bottom: 60px;
    max-width: 100%;
    justify-content: flex-start;
    align-items: center;
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

export const SuggestionWrapper = styled.div<ISuggestionWrapperProps & DefaultTheme>`
    display : ${props => props.hide && 'none'};
    & > .top {
        margin-top: 4px;
        margin-right: 40px;
        margin-left: 40px;
        flex: 0 0 auto;
        & > div {
            text-align: center;
            color: ${(props) => props.colors.gray1};
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif;
            margin: -3px 0 -4px;
        }
    }

    & > .middle {
        margin-top: 16px;
        margin-right: 40px;
        margin-left: 40px;
        flex: 0 0 auto;
    }

    & > .bottom {
        display: flex;
        flex: 0 0 auto;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;

        font-size: 14px;
        text-align: center;
        text-overflow: ellipsis;
        color: ${(props) => props.colors.gray1};

        & > div {
            margin: 0 4px;
            flex: 0 0 auto;
        }
        & > button {
            border: 0;
            padding: 0;
            background: 0 0;
            font-weight: 600;
            color: ${(props) => props.colors.blue1};
            display: inline-block;
        }
    }
`;

export const DownLoadAppButton = styled(Button1)<DefaultTheme>`
    background-color: ${(props) => props.colors.blue1};
    border: 1px solid transparent;
    padding: 12px 18px;
    color: white;
    border-radius: 4px;
`;

export const CompanyWrapper = styled.div`
    margin-bottom: 24px;
    flex: 0 0 auto;
    align-items: center;

    & > span {
        width: 52px;
        height: 26px;
        display: block;
        background-position: -242px -194px;
        background-size: 553px 524px;
        background-image: url('/images/sprite/icons.png');
    }
`;
export const LanguageWrapper = styled.span<DefaultTheme>`
    color: ${(props) => props.colors.gray1};
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
export const ArrowWrapper = styled.div`
    margin-left: 4px;
`;
export const ArrowWrap = styled.div``;
