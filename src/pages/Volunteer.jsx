import React from 'react';
import VolunteerForm from '../components/VolunteerForm';

const Volunteer = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* Get Involved Hero Banner */}
      <div className="relative w-full aspect-[723/172] overflow-hidden flex-shrink-0" style={{ border: '3px solid #00A2FF' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/get-involved-hero.png')",
          }}
        />
        <h1 className="sr-only">Get Involved</h1>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16">
          {/* Left Column: Navy Block Image */}
          <div className="w-full md:w-[352px] flex-shrink-0 flex justify-center">
            <img 
              src="/images/volunteer-left-banner.png" 
              alt="Your Support Matters" 
              className="w-full max-w-[352px] h-auto object-contain"
            />
          </div>

          {/* Right Column: Form */}
          <div className="w-full max-w-[580px]">
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1A2B4C] mb-6 leading-tight">
              Express Your <span className="text-[#2D8B84]">Interest</span>
            </h2>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
