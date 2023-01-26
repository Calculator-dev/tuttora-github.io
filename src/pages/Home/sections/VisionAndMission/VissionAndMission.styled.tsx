import styled from 'styled-components';
import slicica from '../../../../assets/images/VissionAndMission.jpg';

interface Props {
    Padding?: string;
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    TextAlign?: string;
}

export const VisionAndMissionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-image: url(${slicica});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

export const Header = styled.div<Props>`
    width: fit-content;
    text-align: center;
    font-size: 75px;
    color: white;
    padding: ${({ Padding }) => Padding};
    position: absolute;
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    border-bottom: 4px solid #7ed957;
`;

export const SubHeader = styled.div<Props>`
    width: fit-content;
    color: white;
    font-size: 35px;
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    position: absolute;
    text-align: ${({ TextAlign }) => TextAlign};
    @media (max-width: 768px) {
        font-size: 25px;
    }
`;

export const BottomBorder = styled.div<Props>`
    border-bottom: 7px solid #7ed957;
    position: absolute;
    left: ${({ left }) => left};
    right: ${({ right }) => right};
`;
