import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../container/NavBar/NavBar';
import slicica from '../assets/images/Home-section-one.jpg';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    background-image: url(${slicica});
    background-size: cover;
    background-repeat: no-repeat;
`;

const Content = styled.div`
    width: 100%;
    height: calc(100% - 60px);
`;

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            <Navbar />
            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
