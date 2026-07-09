import React from "react";

export default function AboutHero() {
  return (
    <div className="relative w-full aspect-[703/168] overflow-hidden flex-shrink-0">
      {/* Background Image from cropped screenshot */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-hero.png')",
        }}
      />
      {/* Screen reader only header for accessibility/SEO */}
      <h1 className="sr-only">About Us</h1>
    </div>
  );
}