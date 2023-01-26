import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage/AboutPage';
import Home from './pages/Home/Home';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nama" element={<AboutPage />} />
        </Routes>
    );
};

export default App;
