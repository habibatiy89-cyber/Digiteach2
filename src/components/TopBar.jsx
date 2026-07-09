import React from "react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#e8d6b8] text-[#1A2B4C] text-[13px] font-semibold h-[40px] flex-shrink-0">
      <div className="w-full h-full flex items-stretch justify-between">
        {/* Left Side: Location & Email */}
        <div className="flex items-center gap-6 pl-6">
          <span className="flex items-center gap-2">
            {/* MapPin Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#1A2B4C]">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Nairobi, Kenya
          </span>
          <span className="flex items-center gap-2">
            {/* Mail Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A2B4C]">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            support@digiteach.org
          </span>
        </div>

        {/* Right Side: Phone & Socials */}
        <div className="flex items-stretch">
          <span className="flex items-center gap-2 pr-6">
            {/* Phone Icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1A2B4C] -rotate-90">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +254 700 111 222
          </span>
          {/* Slanted Teal Block */}
          <div 
            className="bg-[#2D8B84] text-white flex items-center gap-4 pl-9 pr-6"
            style={{ 
              clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%)',
            }}
          >
            {/* Facebook Filled Square with Cutout f */}
            <a href="#" aria-label="Facebook" className="hover:opacity-85 transition-opacity">
              <div className="w-[18px] h-[18px] bg-white rounded-[3px] flex items-center justify-center text-[#2D8B84]">
                <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h2.72L15 8h-3V6.5c0-.82.68-1.5 1.5-1.5H15V2h-3c-2.21 0-4 1.79-4 4V8z"/>
                </svg>
              </div>
            </a>
            {/* Twitter Bird */}
            <a href="#" aria-label="Twitter" className="hover:opacity-85 transition-opacity text-white">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}