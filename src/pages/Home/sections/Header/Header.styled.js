import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 75px);
    max-width: 100%;
    color: white;
`;

export const WelcomeMessage = styled.div`
    padding-top: 250px;
    font-size: 165px;
    font-weight: 600;
    padding-left: 100px;
    @media (max-width: 1440px) {
        padding-top: 150px;
        font-size: 100px;
    }
    @media (max-width: 1024px) {
        font-size: 80px;
    }
    @media (max-width: 768px) {
        font-size: 70px;
    }
    @media (max-width: 537px) {
        font-size: 50px;
    }
`;

export const SubHeader = styled.div`
    font-size: 65px;
    padding-left: 15px;
    padding-left: 115px;
    @media (max-width: 1440px) {
        font-size: 55px;
    }
    @media (max-width: 1024px) {
        font-size: 45px;
    }
    @media (max-width: 768px) {
        font-size: 35px;
    }
    @media (max-width: 537px) {
        font-size: 25px;
        padding-right: 50px;
        padding-left: 105px;
    }
`;

export const ButtonContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
    padding-top: 250px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding-top: 150px;
        gap: 20px;
    }
`;

export const FindTuttorButton = styled.button`
    margin-right: 150px;
    font-size: 45px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    border-radius: 20px;
    padding: 20px 40px;
    cursor: pointer;
    @media (max-width: 1024px) {
        font-size: 35px;
        margin-right: 100px;
        padding: 15px 40px;
    }
    @media (max-width: 768px) {
        font-size: 35px;
        padding: 15px 70px;
        margin-right: 0;
    }
    @media (max-width: 537px) {
        font-size: 25px;
        border-radius: 10px;
        padding: 15px 35px;
    }
`;

export const BecomeTuttorButton = styled.button`
    font-size: 45px;
    border: 1px solid white;
    color: black;
    background-color: white;
    border-radius: 20px;
    padding: 20px 40px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: transparent;
        color: white;
    }
    @media (max-width: 1024px) {
        font-size: 35px;
        padding: 15px 40px;
    }
    @media (max-width: 768px) {
        font-size: 35px;
        padding: 15px 30px;
    }
    @media (max-width: 537px) {
        font-size: 25px;
        border-radius: 10px;
        padding: 15px 35px;
    }
`;
