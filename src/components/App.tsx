import React, { Component } from 'react';
import MainSection from './sections/MainSection/MainSection';
import AboutSection from './sections/AboutSection/AboutSection';
import SkillsSection from './sections/SkillsSection/SkillsSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
// import About from './sections/AboutSection/About';
// import Navigation from './nav/Navigation';
import '../style.scss';

const App: React.FC<any> = () => {

    return (
        <>
            <MainSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
        </>
    );

}

export default App;