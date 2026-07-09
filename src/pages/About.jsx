import React from "react";
import AboutHero from "../components/AboutHero";
import AboutContent from "../components/AboutContent";

export default function About() {
  return (
    <div className="w-full bg-white font-sans">
      <AboutHero />
      <AboutContent />
    </div>
  );
}