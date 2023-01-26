import React from 'react';
import {
    ButtonContainer,
    Header,
    MoreAboutTuttoraContainer,
    RegisterButton,
    Span,
} from './MoreAboutTuttora.stlyed';

export const MoreAboutTuttora: React.FC = () => {
    return (
        <MoreAboutTuttoraContainer>
            <Header>
                Pronađite <Span>instruktora</Span> iz svog područja studija sa
                nekoliko klikova. <br /> Započnite svoje <Span>putovanje</Span>
            </Header>
            <ButtonContainer>
                <RegisterButton>Registriraj se</RegisterButton>
            </ButtonContainer>
        </MoreAboutTuttoraContainer>
    );
};
