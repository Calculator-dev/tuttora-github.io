import React from 'react';
import {
    Header,
    SubHeader,
    VisionAndMissionContainer,
} from './VissionAndMission.styled';

export const VisionAndMission: React.FC = () => {
    return (
        <VisionAndMissionContainer>
            <Header left="5%" top="10%">
                Naša Misija
            </Header>
            <SubHeader left="5%" top="20%">
                je omogućavanje razmjene znanja i <br /> umrežavanje mladih
                ljudi.
            </SubHeader>
            <Header right="10%" bottom="30%">
                Naša Vizija
            </Header>
            <SubHeader right="10%" bottom="19%" TextAlign="right">
                je povezati mlade ljude cijelog svijeta pružajući <br />
                neograničenu inovativnost i edukativni sadržaj.
            </SubHeader>
        </VisionAndMissionContainer>
    );
};
