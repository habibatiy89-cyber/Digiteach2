import React from 'react';
import { Link } from 'react-router-dom';
import { Link2, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#020C1B', // Deep dark navy/black background
      color: '#ffffff',
      padding: '80px 0 40px',
      borderTop: '3px solid #00A2FF',   // Bright blue border top
      borderBottom: '3px solid #00A2FF',// Bright blue border bottom
      fontFamily: "'Inter', sans-serif"
    }} className="flex-shrink-0 w-full">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Logo & Tagline Column */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="mb-6">
              <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 150" className="h-9 w-auto" role="img" aria-labelledby="footer-logo-title">
                  <title id="footer-logo-title">DIGITEACH Logo</title>
                  
                  {/* LOGO ICON MARK */}
                  <g transform="translate(10, 0)">
                    {/* Lower Network/Node Globe Base */}
                    <circle cx="90" cy="115" r="2" fill="#3D8B7A" />
                    <circle cx="65" cy="125" r="3" fill="#3D8B7A" />
                    <circle cx="115" cy="125" r="3" fill="#3D8B7A" />
                    <circle cx="45" cy="105" r="2.5" fill="#3D8B7A" />
                    <circle cx="135" cy="105" r="2.5" fill="#3D8B7A" />
                    <path d="M 45 105 A 50 50 0 0 0 135 105" fill="none" stroke="#3D8B7A" stroke-width="1.5" stroke-dasharray="3,3" />
                    <path d="M 65 125 Q 90 100 115 125" fill="none" stroke="#3D8B7A" stroke-width="1" />
                    <path d="M 45 105 L 65 125 L 90 115 L 115 125 L 135 105" fill="none" stroke="#3D8B7A" stroke-width="0.75" />
                    <path d="M 90 115 L 90 90" fill="none" stroke="#3D8B7A" stroke-width="1.5" />

                    {/* Open Book Base */}
                    <path d="M 90 95 Q 65 75 30 85 L 30 55 Q 65 45 90 65 Z" fill="none" stroke="#3D8B7A" stroke-width="4.5" stroke-linejoin="round" />
                    <path d="M 90 95 Q 115 75 150 85 L 150 55 Q 115 45 90 65 Z" fill="none" stroke="#3D8B7A" stroke-width="4.5" stroke-linejoin="round" />
                    <path d="M 35 62 L 35 80" stroke="#3D8B7A" stroke-width="2" />
                    <path d="M 145 62 L 145 80" stroke="#3D8B7A" stroke-width="2" />

                    {/* Growing Green Leaves */}
                    <path d="M 90 85 C 70 75 55 50 65 35 C 80 45 85 65 90 85 Z" fill="#4AA785" />
                    <path d="M 90 85 C 110 75 125 50 115 35 C 100 45 95 65 90 85 Z" fill="#3D8B7A" />
                    <path d="M 90 85 Q 75 55 65 35" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M 90 85 Q 105 55 115 35" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />

                    {/* Lightbulb & Radiating Thoughts */}
                    <path d="M 80 32 C 70 32 68 15 90 15 C 112 15 110 32 100 32 L 97 40 L 83 40 Z" fill="none" stroke="#3D8B7A" stroke-width="3" stroke-linejoin="round" />
                    <path d="M 86 44 L 94 44 M 88 48 L 92 48" stroke="#3D8B7A" stroke-width="3" stroke-linecap="round" />
                    {/* Digital Filaments */}
                    <circle cx="90" cy="24" r="2" fill="#3D8B7A" />
                    <path d="M 83 28 L 90 24 L 97 28" fill="none" stroke="#3D8B7A" stroke-width="1.5" />
                    {/* Light Rays */}
                    <path d="M 90 7 L 90 11 M 73 11 L 76 14 M 107 11 L 104 14 M 66 22 L 70 23 M 114 22 L 110 23" stroke="#3D8B7A" stroke-width="2" stroke-linecap="round" />

                    {/* Outer Boundary Arch */}
                    <path d="M 40 70 A 58 58 0 1 1 140 70" fill="none" stroke="#3D8B7A" stroke-width="2.5" stroke-dasharray="180 20 10 20" stroke-linecap="round" />
                  </g>

                  {/* TYPOGRAPHY TEXT - All colored teal for dark bg visibility */}
                  <text x="185" y="92" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="62" font-weight="700" fill="#3D8B7A" letter-spacing="1">DIGI</text>
                  <text x="322" y="92" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="62" font-weight="800" fill="#3D8B7A" letter-spacing="1">TEACH</text>
                </svg>
              </Link>
            </div>
            
            <p className="text-[#94A3B8] text-[15px] leading-relaxed max-w-[340px] font-normal">
              Turning digital access into digital confidence - starting with teachers, growing through community.
            </p>
          </div>

          {/* Explore Column */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-white text-[22px] font-bold mb-1 tracking-wide">Explore</h4>
            {/* Green Line */}
            <div className="w-[50px] h-[2.5px] bg-[#5EBA7D] mb-6"></div>
            
            <ul className="flex flex-col gap-4">
              <li className="flex items-center text-[15px] text-[#CBD5E1] hover:text-[#5EBA7D] transition-colors">
                <Link2 className="w-[18px] h-[18px] text-[#64748B] mr-3 flex-shrink-0" />
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex items-center text-[15px] text-[#CBD5E1] hover:text-[#5EBA7D] transition-colors">
                <Link2 className="w-[18px] h-[18px] text-[#64748B] mr-3 flex-shrink-0" />
                <Link to="/volunteer">Get Involved</Link>
              </li>
              <li className="flex items-center text-[15px] text-[#CBD5E1] hover:text-[#5EBA7D] transition-colors">
                <Link2 className="w-[18px] h-[18px] text-[#64748B] mr-3 flex-shrink-0" />
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Column */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-white text-[22px] font-bold mb-1 tracking-wide">Get in Touch</h4>
            {/* Green Line */}
            <div className="w-[50px] h-[2.5px] bg-[#5EBA7D] mb-6"></div>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center text-[15px] text-[#CBD5E1]">
                <Phone className="w-[18px] h-[18px] text-[#64748B] mr-3 flex-shrink-0" />
                <span>+254 700 111 222</span>
              </li>
              <li className="flex items-center text-[15px] text-[#CBD5E1]">
                <Mail className="w-[18px] h-[18px] text-[#64748B] mr-3 flex-shrink-0" />
                <span>support@digiteach.org</span>
              </li>
              <li className="flex items-center text-[15px] text-[#CBD5E1]">
                <MapPin className="w-[18px] h-[18px] text-[#64748B] mr-3 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-[#1E293B]/60 my-8"></div>

        {/* Bottom copyright & links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#94A3B8]">
          <div>
            Copyright &copy; DigiTeach. All Rights Reserved
          </div>
          <div className="flex gap-8">
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
