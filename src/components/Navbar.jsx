import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "DigiTeach", path: "/digiteach" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 flex-shrink-0">
      <div className="w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/images/logo.svg" alt="DIGITEACH Logo" className="h-9 w-auto" />
          </Link>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-[#1A2B4C]">
          {links.map((link) => {
            const isActive = currentPath === link.path || (link.path === "/about" && currentPath.startsWith("/about"));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={
                  isActive
                    ? "text-[#2D8B84] transition-colors"
                    : "text-[#1A2B4C] hover:text-[#2D8B84] transition-colors"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <Link to="/volunteer">
          <button className="flex items-center gap-2 bg-[#1A2B4C] hover:bg-[#20355e] transition-colors text-white text-sm font-bold px-6 py-2.5 rounded-full cursor-pointer">
            Get Involved
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}