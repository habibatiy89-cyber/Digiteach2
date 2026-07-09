import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-white font-sans">
      {/* Contact Hero Banner */}
      <div className="relative w-full aspect-[720/172] overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact-hero.png')",
          }}
        />
        <h1 className="sr-only">Contact Us</h1>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-16">
          
          {/* Left Column: Info Box & Kids Photo */}
          <div className="w-full lg:w-[360px] flex-shrink-0 flex flex-col justify-between gap-8">
            
            {/* How to Find Us Card */}
            <div className="text-left">
              {/* Tagline: We are Social! */}
              <div 
                className="italic text-2xl mb-3" 
                style={{ fontFamily: "'Caveat', cursive", color: '#84cc16' }}
              >
                We are Social!
              </div>

              {/* Heading */}
              <h2 className="text-[32px] font-extrabold text-[#1A2B4C] leading-tight mb-4">
                How to Find Us
              </h2>

              {/* Description */}
              <p className="text-[#475569] text-[14px] leading-relaxed mb-8 font-medium">
                Feel free to visit us or reach out to us in any of the channels below!
              </p>

              {/* Grid 2x2 for Info */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                
                {/* 1. Location */}
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#2D8B84] flex-shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1A2B4C] mb-0.5">Location</h5>
                    <p className="text-[12px] text-[#475569] font-medium leading-normal">Nairobi, Kenya</p>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#2D8B84] flex-shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1A2B4C] mb-0.5">Phone</h5>
                    <p className="text-[12px] text-[#475569] font-medium leading-normal">07112223344</p>
                  </div>
                </div>

                {/* 3. Email */}
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#2D8B84] flex-shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1A2B4C] mb-0.5">Email</h5>
                    <p className="text-[12px] text-[#475569] font-medium leading-normal break-all">support@digiteach.org</p>
                  </div>
                </div>

                {/* 4. Socials */}
                <div className="flex gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-[#2D8B84] flex-shrink-0 mt-0.5">
                    <Globe size={16} />
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#1A2B4C] mb-1.5">Socials</h5>
                    <div className="flex items-center gap-2 text-[#2D8B84]">
                      <a href="#" aria-label="Facebook" className="hover:text-[#236e68] transition-colors">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter" className="hover:text-[#236e68] transition-colors">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href="#" aria-label="LinkedIn" className="hover:text-[#236e68] transition-colors">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Kids Image */}
            <div className="w-full rounded-[20px] overflow-hidden mt-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <img 
                src="/images/contact-kids.png" 
                alt="Smiling children" 
                className="w-full h-auto object-cover"
              />
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div 
            className="flex-grow w-full max-w-[568px] bg-white p-8 md:p-12 rounded-[28px] border border-[#E2E8F0] shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)]"
          >
            <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#1A2B4C] mb-8 leading-tight text-left">
              Reach Out To Us
            </h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
