import React from 'react';

const WhyThisMatters = () => {
  return (
    <section className="relative bg-[#1A2B4C] text-white py-20 md:py-28 overflow-hidden">
      
      {/* Background Watermarks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right Watermark */}
        <div className="absolute top-[10%] right-[15%] transform rotate-12 opacity-[0.03]">
          <svg className="w-32 h-32 text-white" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 15 C25 12 20 15 20 20 L20 80 C20 85 25 88 30 85 L85 55 C90 52 90 48 85 45 Z" />
          </svg>
        </div>

        {/* Mid Left Watermark */}
        <div className="absolute bottom-[20%] left-[8%] transform -rotate-12 opacity-[0.03]">
          <svg className="w-40 h-40 text-white" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 15 C25 12 20 15 20 20 L20 80 C20 85 25 88 30 85 L85 55 C90 52 90 48 85 45 Z" />
          </svg>
        </div>

        {/* Bottom Right Watermark */}
        <div className="absolute bottom-[10%] right-[5%] transform rotate-[30deg] opacity-[0.03]">
          <svg className="w-28 h-28 text-white" viewBox="0 0 100 100" fill="currentColor">
            <path d="M30 15 C25 12 20 15 20 20 L20 80 C20 85 25 88 30 85 L85 55 C90 52 90 48 85 45 Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Green Badge / Cursive Label */}
          <div 
            className="flex items-center justify-center gap-2 text-[#A6E36F] italic text-2xl mb-4 select-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            {/* Hand-drawn checkbox checkmark SVG */}
            <svg 
              className="w-6 h-6 text-[#A6E36F]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M9 11l3 3 5-5" stroke="#A6E36F" strokeWidth="3" />
            </svg>
            Why This Matters
          </div>

          {/* Heading */}
          <h2 
            className="text-3xl md:text-[42px] font-extrabold leading-tight"
            style={{ color: '#ffffff' }}
          >
            Access is growing. <br />
            Confidence hasn't kept pace
          </h2>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Access Card */}
          <div className="w-full lg:flex-1 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-[28px] p-8 md:p-10 flex flex-col text-left min-h-[360px] shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
            <h3 className="text-white font-extrabold text-2xl mb-4" style={{ color: '#ffffff' }}>Access</h3>
            <p className="text-slate-400 text-[14px] md:text-[15px] leading-relaxed mb-8" style={{ color: '#cbd5e1' }}>
              Phones, devices, online services and platforms are everywhere — but they sit unused or feel risky.
            </p>
            
            {/* List */}
            <div className="flex flex-col gap-4 mt-auto">
              {/* Point 1 */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-400 stroke-[2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
                <span className="text-slate-300 text-[14px] md:text-[15px] font-medium" style={{ color: '#f1f5f9' }}>
                  &ldquo;I have a laptop but I'm afraid to touch it.&rdquo;
                </span>
              </div>
              {/* Point 2 */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-400 stroke-[2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
                <span className="text-slate-300 text-[14px] md:text-[15px] font-medium" style={{ color: '#f1f5f9' }}>
                  &ldquo;I can't tell which links are scams.&rdquo;
                </span>
              </div>
              {/* Point 3 */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-slate-400 stroke-[2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
                <span className="text-slate-300 text-[14px] md:text-[15px] font-medium" style={{ color: '#f1f5f9' }}>
                  &ldquo;I lose files and forget passwords.&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Curved Arrow (Hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <svg 
              className="w-20 h-16 text-[#A6E36F] transform rotate-[-5deg]" 
              viewBox="0 0 80 50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M 10 35 Q 40 10 70 20" />
              <path d="M 52 23 L 70 20 L 63 36" />
            </svg>
          </div>

          {/* Confidence Card */}
          <div className="w-full lg:flex-1 bg-[#2D8B84] border border-[#2D8B84]/50 rounded-[28px] p-8 md:p-10 flex flex-col text-left min-h-[360px] shadow-[0_15px_35px_rgba(45,139,132,0.15)]">
            <h3 className="text-white font-extrabold text-2xl mb-4" style={{ color: '#ffffff' }}>Confidence</h3>
            <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed mb-8" style={{ color: '#ffffff' }}>
              The same tools become practical, safe and independent - for teaching, work and everyday life.
            </p>
            
            {/* List */}
            <div className="flex flex-col gap-4 mt-auto">
              {/* Point 1 */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#A6E36F] stroke-[2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" stroke="#A6E36F" strokeWidth="3" />
                </svg>
                <span className="text-white/95 text-[14px] md:text-[15px] font-medium" style={{ color: '#ffffff' }}>
                  Prepares lesson notes and reports in Docs.
                </span>
              </div>
              {/* Point 2 */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#A6E36F] stroke-[2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" stroke="#A6E36F" strokeWidth="3" />
                </svg>
                <span className="text-white/95 text-[14px] md:text-[15px] font-medium" style={{ color: '#ffffff' }}>
                  Spots scams and stays safe online.
                </span>
              </div>
              {/* Point 3 */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#A6E36F] stroke-[2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" stroke="#A6E36F" strokeWidth="3" />
                </svg>
                <span className="text-white/95 text-[14px] md:text-[15px] font-medium" style={{ color: '#ffffff' }}>
                  Helps colleagues, learners and family.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyThisMatters;
