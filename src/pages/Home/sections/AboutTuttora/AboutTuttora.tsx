import React from 'react';
import {
    AboutTuttoraContainer,
    BorderBottom,
    Header,
    OurStoryButton,
    SubHeader,
} from './AboutTuttora.styled';

export const AboutTuttora: React.FC = () => {
    return (
        <AboutTuttoraContainer>
            <Header>O Tuttori</Header>
            <BorderBottom />
            <SubHeader>
                Osnovana od strane studenata za studente, Tuttora je jedinstvena
                online platforma <br /> namjenjena za razmjenjivanje znanja i
                vještina gdje se vrijednosti grade <br /> poboljšanjem života
                kroz inovativno učenje.
            </SubHeader>
            <OurStoryButton>Naša Priča</OurStoryButton>
        </AboutTuttoraContainer>
    );
};
