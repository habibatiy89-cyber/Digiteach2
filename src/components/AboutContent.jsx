import React from "react";

export default function AboutContent() {
  return (
    <div className="w-full bg-[#FCF9F3] pb-24 flex-shrink-0">
      {/* 1. About the Initiative Introduction */}
      <div className="max-w-3xl mx-auto text-center px-6 pt-16 pb-12">
        <div 
          className="flex items-center justify-center gap-2 text-[#2D8B84] italic text-2xl mb-4" 
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          <svg className="w-6 h-5 text-[#2D8B84] stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5.5 C3 4.1, 4.1 3, 5.5 3 H18.5 C19.9 3, 21 4.1, 21 5.5 V18.5 C21 19.9, 19.9 21, 18.5 21 H5.5 C4.1 21, 3 19.9, 3 18.5 Z" />
            <path d="M7 11.5 L10.5 15 L18 7" />
          </svg>
          About the Initiative
        </div>

        <h2 className="text-[40px] font-extrabold text-[#1A2B4C] leading-[1.15] mb-6">
          Access is not enough. <br />The real goal is confidence.
        </h2>

        <p className="text-[#475569] text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto">
          The Digital Confidence Initiative helps teachers and communities move from
          digital access to digital confidence — through practical training, online
          safety education and community-led support.
        </p>
      </div>

      {/* 2. Why We Exist Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Cropped image with overlap and hand-drawn sun rays from screenshot */}
        <div className="flex justify-center items-center min-h-[260px]">
          <img 
            src="/images/why-we-exist.png"
            alt="Educator and student learning digital literacy"
            width={310}
            height={257}
            className="w-full max-w-[310px] h-auto object-contain"
          />
        </div>

        {/* Right Side: Text content */}
        <div className="text-left">
          <h3 className="text-3xl font-extrabold text-[#1A2B4C] mb-6">
            Why We Exist
          </h3>
          <p className="text-[#475569] text-[15px] leading-relaxed mb-6 font-medium">
            Across Kenya and the wider region, access to phones, devices, digital tools, 
            online services and learning platforms keeps growing. But access alone does 
            not guarantee confident, safe or meaningful use.
          </p>
          <p className="text-[#475569] text-[15px] leading-relaxed font-medium">
            Many people still face practical barriers — using a computer confidently, 
            saving and finding files, creating documents, managing passwords, spotting scams, 
            or applying digital tools to everyday work and learning. The initiative is 
            informed by real educator digital-literacy work in East Africa.
          </p>
        </div>
      </div>

      {/* 3. Community-Driven Model Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Staggered Steps Flow */}
        <div className="text-left">
          <div 
            className="flex items-center gap-2 text-[#2D8B84] italic text-2xl mb-4" 
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <svg className="w-6 h-5 text-[#2D8B84] stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5.5 C3 4.1, 4.1 3, 5.5 3 H18.5 C19.9 3, 21 4.1, 21 5.5 V18.5 C21 19.9, 19.9 21, 18.5 21 H5.5 C4.1 21, 3 19.9, 3 18.5 Z" />
              <path d="M7 11.5 L10.5 15 L18 7" />
            </svg>
            Each One, Teach One
          </div>

          <h3 className="text-3xl font-extrabold text-[#1A2B4C] mb-6">
            A Community - Driven Model
          </h3>

          <p className="text-[#475569] text-[15px] leading-relaxed mb-8 max-w-lg font-medium">
            Built so confidence spreads — never depending on one founder, one school or one pilot. 
            We call it "each one teach one."
          </p>

          {/* Staggered Steps Flow with hand-drawn style arrows from screenshot */}
          <div className="relative flex flex-col gap-2 font-sans text-[#1A2B4C] pl-2">
            
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <span className="text-[28px] font-bold text-[#1A2B4C] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>1</span>
              <div className="pt-0.5">
                <h4 className="text-[15px] font-bold">A teacher learns</h4>
              </div>
            </div>

            {/* Arrow 1 to 2 */}
            <div className="pl-32 my-1">
              <svg className="w-12 h-8 text-[#1A2B4C]" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 10 5 C 25 5, 45 12, 45 32" />
                <path d="M 38 27 L 45 32 L 48 23" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 pl-12">
              <span className="text-[28px] font-bold text-[#1A2B4C] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>2</span>
              <div className="pt-0.5">
                <h4 className="text-[15px] font-bold">A teacher supports another teacher</h4>
              </div>
            </div>

            {/* Arrow 2 to 3 */}
            <div className="pl-44 my-1">
              <svg className="w-10 h-8 text-[#1A2B4C]" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 15 5 C 22 15, 22 25, 20 32" />
                <path d="M 14 26 L 20 32 L 26 27" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 pl-24">
              <span className="text-[28px] font-bold text-[#1A2B4C] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>3</span>
              <div className="pt-0.5">
                <h4 className="text-[15px] font-bold">A learner supports a parent</h4>
              </div>
            </div>

            {/* Arrow 3 to 4 */}
            <div className="pl-64 my-1">
              <svg className="w-16 h-8 text-[#1A2B4C]" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 65 5 C 45 5, 20 12, 15 32" />
                <path d="M 22 27 L 15 32 L 13 23" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <span className="text-[28px] font-bold text-[#1A2B4C] leading-none" style={{ fontFamily: "'Caveat', cursive" }}>4</span>
              <div className="pt-0.5">
                <h4 className="text-[15px] font-bold">A community becomes more confident with technology</h4>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Cropped image with paper background */}
        <div className="flex justify-center items-center">
          <img 
            src="/images/community-model.png"
            alt="A community-driven digital education model"
            width={380}
            height={449}
            className="w-full max-w-[380px] h-auto object-contain"
          />
        </div>
      </div>

      {/* 4. How We Show Up Section */}
      <div className="w-full mt-16">
        {/* Full-width horizontal photo banner */}
        <div className="w-full overflow-hidden mb-16">
          <img 
            src="/images/how-we-show-up-banner.png"
            alt="Digiteach community moments banner"
            className="w-full h-auto object-cover max-h-[120px]"
          />
        </div>

        {/* Header copy */}
        <div className="max-w-3xl mx-auto text-center px-6 mb-12">
          <h3 className="text-[36px] font-extrabold text-[#1A2B4C] leading-tight mb-4">
            How we show up
          </h3>
          <p className="text-[#475569] text-[15px] leading-relaxed max-w-xl mx-auto font-medium">
            Clear enough to guide, warm enough to support, practical enough to use, and hopeful 
            enough to open doors.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Clear & Practical */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#E5E7EB]/50 flex flex-col text-left">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2D8B84]/10 text-[#2D8B84] mb-6">
              {/* Hand-drawn style lightbulb SVG */}
              <svg className="w-8 h-8 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18h6M10 21h4M12 3a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 5.5v2.5H8v-2.5c-1.5-1-3-3-3-5.5a7 7 0 0 1 7-7Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8v2M10 9h4M5 5l1.5 1.5M19 5l-1.5 1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-extrabold text-[#1A2B4C] mb-3">Clear & Practical</h4>
            <p className="text-[#64748B] text-[14px] leading-relaxed font-medium">
              Simple explanations and low-jargon language. No question is too basic.
            </p>
          </div>

          {/* Card 2: Human & Humble */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#E5E7EB]/50 flex flex-col text-left">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9D4EDD]/10 text-[#9D4EDD] mb-6">
              {/* Hand-drawn style ribbon bow SVG */}
              <svg className="w-8 h-8 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 12c-2-2-5-4-5-6a3 3 0 1 1 6 0 3 3 0 1 1 6 0c0 2-3 4-5 6Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12c-1.5 2-3.5 5.5-4 7-.5 1.5 0 2 1.5 1 2-1 4.5-4 4.5-4M16 12c1.5 2 3.5 5.5 4 7 .5 1.5 0 2-1.5 1-2-1-4.5-4-4.5-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-extrabold text-[#1A2B4C] mb-3">Human & humble</h4>
            <p className="text-[#64748B] text-[14px] leading-relaxed font-medium">
              Real people, real classrooms, familiar settings and inclusive examples.
            </p>
          </div>

          {/* Card 3: Patient & Safe */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#E5E7EB]/50 flex flex-col text-left">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1E90FF]/10 text-[#1E90FF] mb-6">
              {/* Hand-drawn style thumbs-up SVG */}
              <svg className="w-8 h-8 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 11V21M7 11c1.5-1 3-3 3-5a3 3 0 0 0-3-3H6v8M7 11h8.5a2.5 2.5 0 0 1 2.5 2.5c0 1-.5 2-1.5 2.5 1 .5 1.5 1.5 1.5 2.5a2.5 2.5 0 0 1-2.5 2.5H7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7l1-2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-extrabold text-[#1A2B4C] mb-3">Patient & safe</h4>
            <p className="text-[#64748B] text-[14px] leading-relaxed font-medium">
              Encouraging, no-shame learning that builds confidence step by step.
            </p>
          </div>

          {/* Card 4: Hopeful & Open */}
          <div className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#E5E7EB]/50 flex flex-col text-left">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFB703]/10 text-[#FFB703] mb-6">
              {/* Hand-drawn style smiley face SVG */}
              <svg className="w-8 h-8 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 9c.5-1.5 1.5-2.5 2.5-2.5S10 7.5 10 9M14 9c.5-1.5 1.5-2.5 2.5-2.5S19 7.5 19 9" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 13c1.5 3 6.5 4.5 12 0" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-extrabold text-[#1A2B4C] mb-3">Hopeful & open</h4>
            <p className="text-[#64748B] text-[14px] leading-relaxed font-medium">
              Focused on what digital skills can unlock — and the doors they open.
            </p>
          </div>

        </div>
      </div>

      {/* 5. Current Pilot Section */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
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
}