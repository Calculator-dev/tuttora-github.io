import styled from 'styled-components';
import slicica from '.././../../../assets/images/AboutTuttora.jpg';

export const AboutTuttoraContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-image: url(${slicica});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Header = styled.div`
    padding-top: 300px;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 65px;
    color: white;
    position: relative;
`;

export const BorderBottom = styled.div`
    margin-top: 20px;
    border-bottom: 7px solid #7ed957;
    position: absolute;
    left: 48%;
    right: 48%;
`;

export const SubHeader = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 100px;
    color: white;
    font-size: 45px;
    text-align: center;
    @media (max-width: 1440px) {
        padding: 0 100px;
    }
    @media (max-width: 1024px) {
        font-size: 35px;
    }
`;

export const OurStoryButton = styled.div`
    font-size: 45px;
    margin: 0 auto;
    margin-top: 150px;
    width: fit-content;
    border: 1px solid #7ed957;
    color: white;
    background-color: #7ed957;
    border-radius: 20px;
    padding: 20px 100px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        border: 1px solid #7ed957;
        background-color: transparent;
    }

    @media (max-width: 1024px) {
        font-size: 30px;
        padding: 15px 40px;
    }
`;
