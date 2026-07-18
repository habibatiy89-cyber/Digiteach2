import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutInitiative = () => {
  return (
    <section className="w-full bg-[#FCF9F3] py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="flex justify-center items-center">
            {/* Collage Container */}
            <div className="relative w-full max-w-[420px] h-[450px]">
              
              {/* Center Image: Maasai Man (clean, no overlap in source) */}
              <div className="absolute left-[12%] top-[50px] w-[70%] h-[350px] rounded-[28px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
                <img 
                  src="/images/maasai_man.png" 
                  alt="Educator waving at laptop" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top-Right Image: Woman and Child (with border and shadow) */}
              <div className="absolute right-0 top-[10px] w-[46%] h-[135px] rounded-[20px] overflow-hidden border-4 border-white shadow-[0_12px_28px_rgba(0,0,0,0.15)] z-10">
                <img 
                  src="/images/why-exist-crop1.png" 
                  alt="Student and teacher" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Left Image: Three Kids (with border and shadow) */}
              <div className="absolute left-0 bottom-[10px] w-[46%] h-[135px] rounded-[20px] overflow-hidden border-4 border-white shadow-[0_12px_28px_rgba(0,0,0,0.15)] z-10">
                <img 
                  src="/images/why-exist-crop2.png" 
                  alt="Children looking at tablet" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge: Each One Teach One (top-left overlapping) */}
              <div className="absolute left-[-10px] top-[15px] bg-[#1A2B4C] border-2 border-[#84cc16] text-white px-5 py-3 rounded-[16px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] z-20 select-none">
                <span className="text-[14px] font-extrabold tracking-wide whitespace-nowrap flex items-center">
                  Each One <span className="text-[#84cc16] text-[20px] italic font-medium mx-1.5 leading-none" style={{ fontFamily: "'Caveat', cursive" }}>Teach</span> One
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Text Copy */}
          <div className="text-left flex flex-col items-start max-w-xl">
            {/* Tagline */}
            <div 
              className="flex items-center gap-2 text-[#6A8B4E] italic text-2xl mb-4 select-none"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {/* Hand-drawn style checkbox SVG */}
              <svg 
                className="w-6 h-6 text-[#6A8B4E]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 11l3 3 5-5" stroke="#6A8B4E" strokeWidth="3" />
              </svg>
              About the Initiative
            </div>

            {/* Title */}
            <h2 className="text-[34px] md:text-[42px] font-extrabold text-[#1A2B4C] leading-[1.15] mb-6">
              Access is not enough. <br />
              The real goal is confidence.
            </h2>

            {/* Description */}
            <p className="text-[#475569] text-[15px] md:text-[16px] leading-relaxed mb-8 font-medium">
              The Digital Confidence Initiative helps teachers and communities move from digital access to digital confidence — through practical training, online safety education and community-led support.
            </p>

            {/* CTA Button */}
            <Link 
              to="/volunteer" 
              className="bg-[#2D8B84] hover:bg-[#236e68] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors text-[15px]"
            >
              Get Involved <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutInitiative;
