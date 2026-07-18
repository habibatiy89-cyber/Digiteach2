import React from 'react';
import Hero from '../components/Hero';
import ProgramSection from '../components/ProgramSection';
import AboutInitiative from '../components/AboutInitiative';
import LearningAreas from '../components/LearningAreas';
import WhyThisMatters from '../components/WhyThisMatters';
import Impact from '../components/Impact';
import GetInvolved from '../components/GetInvolved';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
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
      <Impact />
      <Testimonials />
      <Partners />
      <CTA />
      <CurrentPilot />
    </>
  );
};

export default Home;
