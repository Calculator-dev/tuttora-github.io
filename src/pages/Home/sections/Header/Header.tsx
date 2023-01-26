import React from 'react';
import {
    BecomeTuttorButton,
    ButtonContainer,
    FindTuttorButton,
    HeaderContainer,
    SubHeader,
    WelcomeMessage,
} from './Header.styled';
import { AiOutlineDown } from 'react-icons/ai';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <WelcomeMessage>Dobrodošli na Tuttoru</WelcomeMessage>
            <SubHeader>
                Jedinstvena digitalna platforma koja čini nalaženje instruktora
                brzo i lako
            </SubHeader>
            <ButtonContainer>
                <FindTuttorButton>Pronađi instrukcije</FindTuttorButton>
                <BecomeTuttorButton>Postani instruktor</BecomeTuttorButton>
            </ButtonContainer>
            <AiOutlineDown
                style={{
                    width: '80px',
                    height: '80px',
                    paddingTop: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                }}
            />
        </HeaderContainer>
    );
};
