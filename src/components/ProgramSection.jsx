import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProgramSection = () => {
  return (
    <section className="relative -mt-16 z-10 pb-12">
      <div className="container mx-auto px-6">
        <div className="bg-[#2D8B84] rounded-[32px] p-8 md:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
          
          <div className="flex-1 min-w-[280px]">
            <span className="text-[12px] font-extrabold tracking-[2.5px] uppercase text-[#A6E36F] block mb-3">
              OUR FLAGSHIP PROGRAMME
            </span>
            <h2 className="text-3xl md:text-[38px] font-extrabold mb-4 leading-tight">
              DigiTeach
            </h2>
            <p className="text-white/95 text-[15px] md:text-[16px] leading-relaxed max-w-[650px] font-medium">
              Practical digital confidence for teachers — our flagship programme supporting educators to build digital confidence in classrooms and communities.
            </p>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto">
            <Link 
              to="/digiteach" 
              className="w-full lg:w-auto border border-white hover:bg-white hover:text-[#2D8B84] text-white font-bold px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors text-[15px]"
            >
              See what Teachers Learn <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
