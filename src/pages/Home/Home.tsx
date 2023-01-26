import React from 'react';
import Layout from '../../globalStyle/Layout';
import { Footer } from '../../container/Footer/Footer';
import { HeaderContainer } from './Home.styled';
import { AboutTuttora } from './sections/AboutTuttora/AboutTuttora';
import { Header } from './sections/Header/Header';
import { MoreAboutTuttora } from './sections/MoreAboutTuttora/MoreAboutTuttora';
import { VisionAndMission } from './sections/VisionAndMission/VisionAndMission';

const Home: React.FC = () => {
    return (
        <HeaderContainer>
            <Layout>
                <Header />
                <MoreAboutTuttora />
                <AboutTuttora />
                <VisionAndMission />
                <Footer />
            </Layout>
        </HeaderContainer>
    );
};

export default Home;
