import styled, { DefaultTheme } from 'styled-components';

export const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    padding-bottom: 50px;
    position: relative;
    @media screen and (max-width: 600px) {
        width: 100%;
        margin : 0;
    }   
`;

export const HeaderWrapper = styled.header`
    position: sticky;
    width: 100%;
    height: 44px;
    display: flex;
`;
export const HeaderWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 16px;
    width: 100%;
    height: 100%;
`;
export const CameraButtonWrapper = styled.div`
    flex: 0 0 32px;
    justify-content: center;
`;
export const CameraButton = styled.button`
    background: 0 0;
    border: 0;
    margin: 0;
    padding: 0;
`;
export const InstagramLogoWrapper = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InstagramLogoWrap = styled.div`
    margin-top: 8px;
`;
export const SendMessageWrapper = styled.div`
    flex: 0 0 32px;
    position: relative;
    top: 2px;
    justify-content: center;
`;
export const StoryWrapper = styled.div<DefaultTheme>`
    background-color: ${(props) => props.colors.gray7};
    border-top: 1px solid ${(props) => props.colors.gray4};
    border-bottom: 1px solid ${(props) => props.colors.gray4};
    padding: 10px 0;
    max-width: 600px;
`;
export const StoryWrap = styled.div`
    height: 85px;
`;
export const FeedWrapper = styled.div``;
