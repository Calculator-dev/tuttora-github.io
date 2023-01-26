import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    max-width: 100%;
    height: 30vh;
    background-color: #282b2a;
    color: white;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const LogoTextMenuContainer = styled.div`
    display: flex;
    width: 90%;
    padding-top: 50px;
    justify-content: space-between;
`;

export const LogoTextContainer = styled.div``;

export const MenuContianer = styled.div``;

export const MenuItems = styled.div`
    border-bottom: 1px solid white;
    width: fit-content;
    margin-bottom: 10px;
    transition: border-bottom color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #7ed957;
        border-bottom: 1px solid #7ed957;
    }
`;

export const Text = styled.div``;

export const Logo = styled.img``;

export const InfoContainer = styled.div`
    position: absolute;
    display: flex;
    width: 90%;
    max-width: 100%;
    justify-content: space-between;
    bottom: 10%;
`;

export const AllrightReserver = styled.div``;

export const LawRules = styled.div`
    display: flex;
    gap: 50px;
`;

export const Rules = styled.div`
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #7ed957;
    }
`;

export const IconsContainer = styled.div``;
