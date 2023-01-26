import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import slicica from '../../assets/images/Dots.jpg';

export const NavBarContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
`;

export const ListContainer = styled.div`
    display: flex;
    gap: 20px;
    border-bottom: 3px solid white;
    @media (max-width: 1160px) {
        display: none;
    }
`;

export const NavBarItems = styled.h2``;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: white;
    cursor: pointer;
    position: relative;
    display: inline-block;
    font-size: 24px;
    width: fit-content;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    @media (max-width: 1440px) {
        font-size: 16px;
    }
    @media (max-width: 537px) {
        font-size: 12px;
    }
`;

export const LanguagueAndLoginContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1160px) {
        display: none;
    }
`;

export const Logo = styled.img`
    cursor: pointer;
`;

export const Language = styled.div`
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
`;

export const Login = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 4px;
    color: white;
    margin-left: 50px;
    cursor: pointer;
    border: 1px solid white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        color: black;
        background-color: white;
    }
`;

export const MobileMenuContainer = styled.div`
    position: relative;

    @media (min-width: 1160px) {
        display: none;
    }
`;

export const MobileMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;

    padding-top: 50px;

    width: 40%;
    height: 100vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-image: url(${slicica});
    background-color: white;
    background-size: cover;
    background-repeat: repeat;
    /* top box shadow */
    box-shadow: 0px 0px 20px rgba(168, 168, 168, 0.15);
    @media (min-width: 768px) {
        width: 60%;
    }
    @media (max-width: 537px) {
        width: 80%;
    }
`;

export const MobileMenuItems = styled(NavLink)`
    text-decoration: none;
    color: black;
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin-top: 20px;
    font-size: 32px;
    width: fit-content;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: white;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;
