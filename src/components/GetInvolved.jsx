import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  const pathways = [
    {
      title: 'Join as a Teacher',
      desc: 'For teachers interested in joining, teaching or supporting a future cohort.',
      image: '/images/join_teacher.png',
      btnText: 'Join Today',
      link: '/volunteer?role=teacher'
    },
    {
      title: 'Host a Cohort',
      desc: 'For schools or institutions with a learning space, computer lab or community access.',
      image: '/images/host_cohort.png',
      btnText: 'Start Hosting',
      link: '/volunteer?role=school'
    },
    {
      title: 'Volunteer as a Fellow',
      desc: 'For people who can support facilitation, curriculum, documentation, research, etc.',
      image: '/images/volunteer_fellow.png',
      btnText: 'Join The Team',
      link: '/volunteer?role=fellow'
    },
    {
      title: 'Partner with Us',
      desc: 'For organizations, sponsors, research institutions, tech partners and supporters.',
      image: '/images/partner_us.png',
      btnText: 'Reach Out',
      link: '/partners'
    }
  ];

  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      
      {/* Background Watermark Leaf */}
      <div className="absolute right-[-40px] top-[20%] pointer-events-none z-0 opacity-[0.06] select-none text-[#1A2B4C] hidden lg:block">
        <svg className="w-56 h-56 rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50,90 Q30,60 35,30 Q38,15 50,10 Q62,15 65,30 Q70,60 50,90 Z" />
          <path d="M50,90 Q50,50 50,12" />
          <path d="M50,75 Q40,65 38,62" />
          <path d="M50,60 Q40,50 37,45" />
          <path d="M50,45 Q40,35 36,30" />
          <path d="M50,75 Q60,65 62,62" />
          <path d="M50,60 Q60,50 63,45" />
          <path d="M50,45 Q60,35 64,30" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Cursive green label with cursor pointer icon */}
          <div 
            className="flex items-center justify-center gap-2 text-[#6A8B4E] italic text-2.5xl mb-3 select-none"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <img 
              src="/images/cursor.png" 
              alt="Cursor pointer" 
              className="w-5 h-6 object-contain"
            />
            How to Get Involved
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-[40px] font-extrabold text-[#1A2B4C] leading-tight mb-4">
            Find your way to help
          </h2>

          {/* Subtitle */}
          <p className="text-[#475569] text-base md:text-lg max-w-[650px] mx-auto font-medium">
            One simple form routes you to the right pathway — whoever you are.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {pathways.map((path, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[24px] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-slate-100/85 hover:border-[#2D8B84]/20 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Image container */}
                <div className="w-full h-[145px] rounded-[18px] overflow-hidden mb-6 bg-slate-50">
                  <img 
                    src={path.image} 
                    alt={path.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-extrabold text-[#1A2B4C] mb-3 leading-snug">
                  {path.title}
                </h3>

                {/* Card Description */}
                <p className="text-[13.5px] text-[#475569] leading-relaxed mb-6 font-medium">
                  {path.desc}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <Link 
                  to={path.link} 
                  className="inline-block border-2 border-[#2D8B84]/80 hover:border-[#2D8B84] text-[#2D8B84] hover:bg-[#2D8B84] hover:text-white rounded-full px-6 py-2.5 text-xs font-bold text-center transition-all duration-300"
                >
                  {path.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetInvolved;
