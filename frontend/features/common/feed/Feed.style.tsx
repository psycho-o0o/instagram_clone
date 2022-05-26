import styled, { DefaultTheme } from 'styled-components';

export const Wrapper = styled.article`
    margin-bottom: 15px;
`;
export const Wrap = styled.div`
    max-width: 600px;
`;
export const TitleWrapper = styled.div<DefaultTheme>`
    border-bottom-width: 0.5px;
    border-bottom: 1px solid ${(props) => props.colors.gray5};
`;
export const TitleWrap = styled.div`
    flex-direction: row;
    & > div:first-child {
        flex-direction: row;
        align-items: center;
        padding: 14px 4px 14px 16px;
        flex: 1 0 auto;
    }
    & > div:last-child {
        flex-direction: row;
        align-items: center;
        width: 48px;
    }
`;
export const ProfileImageWrapper = styled.div``;
export const ProfileNameWrapper = styled.div`
    margin-left: 12px;
    flex-direction: row;
    justify-content: flex-start;
    flex: 1 1 auto;
    overflow: hidden;
    font-weight: 600;
`;

export const ProfileNameWrap = styled.div<DefaultTheme>`
    color: ${(props) => props.colors.black2};
`;
export const DetailWrapper = styled.div``;
export const ContentWrapper = styled.div`
    width: 100%;

    & > span {
        position: unset !important;
    }

    img {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
    }
`;
export const SubContentWrapper = styled.div`
`;
export const FunctionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;

    & > div {
        display: flex;
        flex-direction: row;
    }

    & > div:last-child {
        flex: 1 0 auto;
        justify-content: flex-end;
    }
`;

export const FunctionButtonWrapper = styled.div``;
export const FunctionButtonWrap = styled.button`
    background: 0 0;
    border: 0;
    cursor: pointer;
    padding: 8px;
`;
export const GoodCountWrapper = styled.div<DefaultTheme>`
    padding-left:16px;
    padding-right: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color : ${props => props.colors.black2};
`;

export const ExplanationWrapper = styled.div`
    padding-left: 4px;
    padding-right: 16px;

    .text {
        display : flex;
        flex-direction : row;
        justify-content : flex-start;

        & > div {
            flex : 0 0 auto;
            margin-right: 10px;
        }
    }

    .hash {
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 16px;
    }
`;

export const CommentWrapper = styled.div``;
export const TimeWrapper = styled.div``;
