import React from 'react';
import {
    AllrightReserver,
    FooterContainer,
    IconsContainer,
    InfoContainer,
    LawRules,
    Logo,
    LogoTextContainer,
    LogoTextMenuContainer,
    MenuContianer,
    MenuItems,
    Rules,
    Text,
} from './Footer.styled';
import logo from '../../assets/icons/tuttora-logo.svg';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <LogoTextMenuContainer>
                <LogoTextContainer>
                    <Logo alt="tuttora-logo-footer" src={logo} />
                    <Text>
                        Tuttora je jedinstvena online platforma za
                        razmjenjivanje znanja i vještina namijenjenu isključivo
                        studentima i <br /> srednjoškolcima koji traže
                        podučavanje i/ili ga pružaju
                    </Text>
                </LogoTextContainer>
                <MenuContianer>
                    <MenuItems>O Nama</MenuItems>
                    <MenuItems>Tuttora tim</MenuItems>
                    <MenuItems>Kontakt</MenuItems>
                </MenuContianer>
            </LogoTextMenuContainer>
            <InfoContainer>
                <AllrightReserver>
                    @2023. Tuttora Sva prava pridržana.
                </AllrightReserver>
                <LawRules>
                    <Rules>Pravila ponašanja</Rules>
                    <Rules>Politika privatnosti</Rules>
                </LawRules>
                <IconsContainer>
                    <AiOutlineLinkedin
                        style={{
                            width: '30px',
                            height: '30px',
                            marginRight: '20px',
                        }}
                    />
                    <AiOutlineFacebook
                        style={{
                            width: '30px',
                            height: '30px',
                            marginRight: '20px',
                        }}
                    />
                    <AiOutlineInstagram
                        style={{
                            width: '30px',
                            height: '30px',
                            marginRight: '20px',
                        }}
                    />
                    <AiOutlineTwitter
                        style={{ width: '30px', height: '30px' }}
                    />
                </IconsContainer>
            </InfoContainer>
        </FooterContainer>
    );
};
