import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative bg-[#1A2B4C] text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Hand-drawn heart watermark in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg 
          className="absolute left-[38%] top-[12%] w-[420px] h-[420px] text-[#2D8B84]/10 hidden lg:block" 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Heart path */}
          <path d="M50 40 C35 25 15 35 15 55 C15 75 40 90 50 95 C60 90 85 75 85 55 C85 35 65 25 50 40 Z" />
          {/* Rays top-left */}
          <path d="M25 25 L18 18" />
          <path d="M35 18 L32 10" />
          <path d="M18 35 L10 32" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Hero Left Content */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
            {/* Tagline */}
            <p 
              className="italic text-2xl mb-4" 
              style={{ fontFamily: "'Caveat', cursive", color: '#84cc16' }}
            >
              Because access alone isn't enough.
            </p>
            
            {/* Title */}
            <h1 className="text-[42px] md:text-[52px] lg:text-[56px] font-extrabold leading-[1.1] mb-6">
              Turning <br />
              Digital <span className="line-through decoration-[#EF4444] decoration-[3px] md:decoration-4 opacity-50">Access</span> <br />
              into Digital <span className="relative inline-block mt-1 italic text-[#84cc16]" style={{ fontFamily: "'Caveat', cursive" }}>
                Confidence
                {/* Custom curved brush stroke SVG underline */}
                <svg className="absolute left-0 bottom-[-8px] w-full h-[12px]" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M5 5C60 10 140 10 195 4" stroke="#84cc16" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-[15px] md:text-[16px] leading-relaxed max-w-[480px] mb-8 font-medium">
              Helping teachers and communities build practical digital skills, online safety awareness and everyday confidence with technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/digiteach" 
                className="bg-[#2E3C56] text-white hover:bg-[#3d4d6c] px-8 py-3.5 rounded-full text-[15px] font-bold inline-flex items-center gap-2 transition-colors border border-transparent"
              >
                Explore DigiTeach <ArrowRight size={18} />
              </Link>
              <Link 
                to="/volunteer" 
                className="bg-[#2D8B84] text-white hover:bg-[#236e68] px-8 py-3.5 rounded-full text-[15px] font-bold inline-flex items-center gap-2 transition-colors border border-transparent"
              >
                Get Involved <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Right Images Grid */}
          <div className="w-full lg:w-[48%] flex justify-center">
            {/* Asymmetric layout box */}
            <div className="relative w-full max-w-[500px] h-[360px] md:h-[420px] flex-shrink-0">
              
              {/* Image 1: Top Left */}
              <div className="absolute left-0 top-0 w-[58%] h-[56%] rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-[#1A2B4C]">
                <img 
                  src="/images/home-bg.png" 
                  alt="Teachers in training" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2: Top Right */}
              <div className="absolute right-0 top-0 w-[38%] h-[56%] rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-[#1A2B4C]">
                <img 
                  src="/images/home-bg-R.png" 
                  alt="Student using keyboard" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3: Bottom */}
              <div className="absolute left-[2%] bottom-0 w-[96%] h-[40%] rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-[#1A2B4C]">
                <img 
                  src="/images/home-bg-Bottom.png" 
                  alt="Group discussion" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
