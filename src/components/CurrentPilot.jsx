import React from 'react';
import { Link } from 'react-router-dom';

const CurrentPilot = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-slate-100 bg-white">
        {/* Left Column: Black & White Photo */}
        <div className="relative h-64 md:h-auto min-h-[320px]">
          <img 
            src="/images/current-pilot.png"
            alt="Current Pilot children in Nakuru"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Teal Box */}
        <div className="bg-[#2D8B84] p-8 md:p-16 flex flex-col justify-center text-left text-white">
          {/* Tagline: Current Pilot */}
          <div 
            className="flex items-center gap-2 text-[#A6E36F] italic text-2xl mb-4 select-none" 
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            {/* Paper Plane SVG */}
            <svg className="w-6 h-6 text-[#A6E36F] stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Current Pilot
          </div>

          {/* Heading */}
          <h3 className="text-3xl md:text-[36px] font-extrabold text-white leading-[1.2] mb-6">
            The <span className="text-[#A6E36F]">first cohort</span> is being prepared in Nakuru / Bahati
          </h3>

          {/* Description */}
          <p className="text-white/95 text-[15px] leading-relaxed mb-8 font-medium">
            Pilot planning is underway for a first teacher digital confidence cohort, with timing under review for 2026. We're currently seeking host schools, teachers, volunteers and partners.
          </p>

          {/* Button */}
          <div>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 border border-white/60 hover:border-white text-white rounded-full px-8 py-3.5 text-sm font-bold hover:bg-white hover:text-[#2D8B84] transition-all duration-300"
            >
              Express Your Interest <span className="text-base font-normal">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentPilot;
