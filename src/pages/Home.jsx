import React from 'react';
import Hero from '../components/Hero';
import ProgramSection from '../components/ProgramSection';
import AboutInitiative from '../components/AboutInitiative';
import LearningAreas from '../components/LearningAreas';
import WhyThisMatters from '../components/WhyThisMatters';
import GetInvolved from '../components/GetInvolved';
import Partners from '../components/Partners';
import CurrentPilot from '../components/CurrentPilot';

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramSection />
      <AboutInitiative />
      <LearningAreas />
      <WhyThisMatters />
      <GetInvolved />
      <Partners />
      <CurrentPilot />
    </>
  );
};

export default Home;
