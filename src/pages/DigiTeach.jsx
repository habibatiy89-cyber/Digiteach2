import React from 'react';

const DigiTeach = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* DigiTeach Hero Banner */}
      <div className="relative w-full aspect-[720/173] overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/digiteach-hero.png')",
          }}
        />
        <h1 className="sr-only">DigiTeach</h1>
      </div>

      {/* What is DigiTeach Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          
          {/* Left Column: Text */}
          <div className="w-full md:max-w-[480px] text-left">
            <div 
              className="italic text-2xl mb-4" 
              style={{ fontFamily: "'Caveat', cursive", color: '#84cc16' }}
            >
              No Question is too Basic!
            </div>
            
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1A2B4C] mb-6 leading-tight">
              What is DigiTeach?
            </h2>

            <h4 className="text-[16px] md:text-[18px] font-bold text-[#1A2B4C] mb-4 leading-relaxed">
              A teacher digital confidence programme.
            </h4>

            <p className="text-[#475569] text-[14px] leading-relaxed font-medium">
              It starts with teachers because educators are often the first enablers, knowledge carriers and practical problem-solvers in their communities.
            </p>
          </div>

          {/* Right Column: Photo */}
          <div className="w-full md:w-[350px] flex-shrink-0 flex justify-center">
            <div className="w-full max-w-[350px] rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-[#E2E8F0]">
              <img 
                src="/images/digiteach-man-laptop.png" 
                alt="Teacher using laptop" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Curriculum Overview */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center overflow-hidden">
        
        {/* Left Column: List on Paper Texture */}
        <div 
          className="w-full lg:w-1/2 px-8 py-16 md:px-16 md:py-20 flex flex-col justify-center text-left"
          style={{ 
            backgroundImage: "url('/images/paper-bg.png')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Tagline */}
          <div className="flex items-center mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span 
              className="italic text-2xl" 
              style={{ fontFamily: "'Caveat', cursive", color: '#84cc16' }}
            >
              The Curriculum
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1A2B4C] mb-8 leading-tight">
            Four Core Learning Areas
          </h2>

          {/* List Cards */}
          <div className="flex flex-col gap-4 max-w-[500px]">
            
            {/* Area 1 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex gap-4">
              <span className="text-[28px] font-extrabold text-[#2D8B84] leading-none mt-0.5">1</span>
              <div>
                <h4 className="text-[16px] font-bold text-[#1A2B4C] mb-1">Digital Foundations</h4>
                <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
                  Computer basics, mouse and keyboard use, typing practice, files, folders, naming, saving, opening, closing, and finding documents.
                </p>
              </div>
            </div>

            {/* Area 2 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex gap-4">
              <span className="text-[28px] font-extrabold text-[#EF4444] leading-none mt-0.5">2</span>
              <div>
                <h4 className="text-[16px] font-bold text-[#1A2B4C] mb-1">Internet, Email and Cloud Confidence</h4>
                <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
                  Browsers, online search, Gmail, passwords, attachments, downloads, uploads, and Google Drive.
                </p>
              </div>
            </div>

            {/* Area 3 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex gap-4">
              <span className="text-[28px] font-extrabold text-[#F59E0B] leading-none mt-0.5">3</span>
              <div>
                <h4 className="text-[16px] font-bold text-[#1A2B4C] mb-1">Teacher Productivity</h4>
                <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
                  Google Docs for letters, tests, reports, and lesson notes; Google Sheets for marks and attendance; Google Slides for presentations.
                </p>
              </div>
            </div>

            {/* Area 4 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex gap-4">
              <span className="text-[28px] font-extrabold text-[#3B82F6] leading-none mt-0.5">4</span>
              <div>
                <h4 className="text-[16px] font-bold text-[#1A2B4C] mb-1">Digital Safety</h4>
                <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
                  Scams, phishing, mobile money fraud, fake links, AI-generated misinformation, password hygiene, and safer online behaviour.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Teal Graphic Panel */}
        <div className="w-full lg:w-1/2 flex-shrink-0 flex items-stretch">
          <img 
            src="/images/curriculum-right.png" 
            alt="Curriculum visual presentation" 
            className="w-full h-auto lg:h-full object-cover"
          />
        </div>

      </div>

      {/* Cards Info Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.02)] border-2 border-dashed border-sky-100 flex flex-col text-left">
            <h4 className="text-[18px] font-extrabold text-[#2563EB] mb-4">Who It's For</h4>
            <p className="text-[#475569] text-[14px] leading-relaxed font-medium">
              Teachers and educators who want to use everyday technology more confidently — whatever their current level.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.02)] border-2 border-dashed border-violet-100 flex flex-col text-left">
            <h4 className="text-[18px] font-extrabold text-[#7C3AED] mb-4">How it's Delivered</h4>
            <p className="text-[#475569] text-[14px] leading-relaxed font-medium">
              Hands-on, community-led sessions. Learn by doing, practise with support, build confidence step by step.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.02)] border-2 border-dashed border-rose-100 flex flex-col text-left">
            <h4 className="text-[18px] font-extrabold text-[#EF4444] mb-4">The Approach</h4>
            <p className="text-[#475569] text-[14px] leading-relaxed font-medium">
              Adult learning, inquiry-based practice and peer support — applied to real classroom and life tasks.
            </p>
          </div>
        </div>
      </div>

      {/* Current Pilot Section */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
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
              className="flex items-center gap-2 text-lime italic text-2xl mb-4" 
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {/* Paper Plane SVG */}
              <svg className="w-6 h-6 text-lime stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Current Pilot
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-[36px] font-extrabold text-white leading-[1.2] mb-6">
              The <span className="text-lime">first cohort</span> is being prepared in Nakuru / Bahati
            </h3>

            {/* Description */}
            <p className="text-white/90 text-[15px] leading-relaxed mb-8 font-medium">
              Pilot planning is underway for a first teacher digital confidence cohort, with timing under review for 2026. We're currently seeking host schools, teachers, volunteers and partners.
            </p>

            {/* Button */}
            <div>
              <a 
                href="/contact" 
                className="inline-block border border-white/60 hover:border-white text-white rounded-full px-8 py-3.5 text-sm font-bold hover:bg-white hover:text-[#2D8B84] transition-all duration-300"
              >
                Express Your Interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigiTeach;
