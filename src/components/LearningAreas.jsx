import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Globe, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react';
import LearningCard from './LearningCard';

const LearningAreas = () => {
  const areas = [
    {
      areaNumber: '01',
      title: 'Digital Foundations',
      description: 'Computer basics, mouse and keyboard use, typing practice, files, folders, naming, saving and finding documents.',
      icon: <Monitor size={32} className="text-[#1A2B4C]" />
    },
    {
      areaNumber: '02',
      title: 'Internet, Email & Cloud',
      description: 'Browsers, search, Gmail, passwords, attachments, downloads, uploads and Google Drive.',
      icon: <Globe size={32} className="text-[#1A2B4C]" />
    },
    {
      areaNumber: '03',
      title: 'Teacher Productivity',
      description: 'Docs, Sheets and Slides for lesson notes, tests, reports, marksheets and simple presentations for learners.',
      icon: <GraduationCap size={32} className="text-[#1A2B4C]" />
    },
    {
      areaNumber: '04',
      title: 'Digital Safety',
      description: 'Scams, phishing, fake links, mobile money fraud, AI-generated misinformation, password hygiene and safer online behaviour.',
      icon: <ShieldCheck size={32} className="text-[#1A2B4C]" />
    }
  ];

  return (
    <section 
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/curriculum-right.png')",
        backgroundPosition: 'center right'
      }}
    >
      {/* Background Overlay if needed to match styling, but screenshot has clean background */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main White Card Container */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 md:p-16 max-w-6xl mx-auto border border-slate-100/50">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            
            {/* Left Header Content */}
            <div className="max-w-2xl text-left">
              {/* Green Badge / Cursive Label */}
              <div 
                className="flex items-center gap-1.5 text-[#6A8B4E] text-2xl mb-3 font-medium select-none"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                {/* Custom Sparkles SVG */}
                <svg className="w-6 h-6 text-[#6A8B4E] fill-current" viewBox="0 0 24 24">
                  {/* Large sparkle */}
                  <path d="M10 2c0 4.4-3.6 8-8 8 4.4 0 8 3.6 8 8 0-4.4 3.6-8 8-8-4.4 0-8-3.6-8-8z" />
                  {/* Small sparkle */}
                  <path d="M18 14c0 2.2-1.8 4-4 4 2.2 0 4 1.8 4 4 0-2.2 1.8-4 4-4-2.2 0-4-1.8-4-4z" />
                </svg>
                What Participants Learn
              </div>

              {/* Title */}
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#1A2B4C] leading-none mb-3">
                4 Practical Areas of <br />
                <span 
                  className="text-[#6A8B4E] text-[36px] md:text-[46px] inline-block mt-1 font-bold"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  Confidence
                </span>
              </h2>

              {/* Description */}
              <p className="text-[#64748B] text-[15px] md:text-[16px] leading-relaxed font-medium">
                Plain-language skills teachers can use the same day — in the classroom, in admin, and in everyday life.
              </p>
            </div>

            {/* Right Header Button */}
            <div className="flex-shrink-0">
              <Link 
                to="/digiteach" 
                className="bg-[#1A2B4C] hover:bg-[#132038] font-bold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-[0_4px_12px_rgba(26,43,76,0.15)] hover:translate-y-[-2px]"
                style={{ color: '#ffffff' }}
              >
                Learn More <ArrowRight size={16} style={{ color: '#ffffff' }} />
              </Link>
            </div>

          </div>

          {/* Grid Layout of 4 areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 pt-4">
            {areas.map((area, index) => (
              <LearningCard key={index} {...area} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningAreas;
