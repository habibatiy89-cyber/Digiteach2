import React from 'react';

const LearningCard = ({ areaNumber, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon Container with Circle White Shadow */}
      <div className="w-24 h-24 bg-white rounded-full shadow-[0_12px_35px_rgba(26,43,76,0.08)] border border-slate-100 flex items-center justify-center relative z-10">
        {icon}
      </div>

      {/* Tilted Area Badge */}
      <div 
        className="bg-[#1A2B4C] text-white text-[13px] font-extrabold px-6 py-2 rounded-[12px] relative z-20 mt-[-16px] shadow-[0_4px_10px_rgba(26,43,76,0.1)] transition-transform duration-300 hover:scale-105 select-none"
        style={{ transform: 'rotate(-5deg) skewX(-5deg)' }}
      >
        Area - {areaNumber}
      </div>

      {/* Title */}
      <h3 className="text-[#1A2B4C] font-extrabold text-[16px] md:text-[17px] mt-6 mb-3 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#64748B] text-[13px] leading-relaxed max-w-[240px] mx-auto font-medium">
        {description}
      </p>
    </div>
  );
};

export default LearningCard;
