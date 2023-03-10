import styled from 'styled-components';
import slicica from '../../../../assets/images/MoreAboutTuttora.jpg';

export const MoreAboutTuttoraContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-image: url(${slicica});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 537px) {
        height: 70vh;
    }
`;

export const Header = styled.div`
    padding: 300px;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 65px;
    color: white;
    @media (max-width: 1024px) {
        font-size: 40px;
    }
    @media (max-width: 768px) {
        padding: 300px 0 300px 0;
    }
    @media (max-width: 537px) {
        padding: 200px 0 200px 0;
        font-size: 35px;
    }
`;

export const Span = styled.span`
    color: #7ed957;
    font-weight: 600;
`;

export const ButtonContainer = styled.div`
    width: fit-content;
    margin: 0 auto;
`;

export const RegisterButton = styled.button`
    font-size: 45px;
    margin: 0 auto;
    width: fit-content;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    border-radius: 20px;
    padding: 20px 100px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: white;
        color: black;
    }

    @media (max-width: 1024px) {
        font-size: 35px;
        padding: 15px 40px;
    }
    @media (max-width: 537px) {
        font-size: 25px;
        border-radius: 10px;
        padding: 15px 55px;
    }
`;
