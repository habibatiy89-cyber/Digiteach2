import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10 px-4 bg-[#FCF9F3] rounded-[24px] border border-[#2D8B84]/20 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
        <CheckCircle className="w-14 h-14 text-[#2D8B84] mb-4" />
        <h4 className="text-[20px] font-bold text-[#1A2B4C] mb-2">Message Sent!</h4>
        <p className="text-[#475569] text-[14px] leading-relaxed max-w-sm mb-6">
          Thank you for reaching out. A member of our team will review your message and respond within 24 hours.
        </p>
        <button 
          onClick={handleReset} 
          className="border border-[#2D8B84] text-[#2D8B84] hover:bg-[#2D8B84] hover:text-white rounded-full px-6 py-2 text-[14px] font-bold transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left w-full font-sans">
      
      {/* 1. Full Name */}
      <div>
        <label className="block text-[13px] font-bold text-[#1A2B4C] mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full h-[44px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
        />
      </div>

      {/* 2. Email */}
      <div>
        <label className="block text-[13px] font-bold text-[#1A2B4C] mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input 
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full h-[44px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
        />
      </div>

      {/* 3. Phone Number */}
      <div>
        <label className="block text-[13px] font-bold text-[#1A2B4C] mb-2">
          Phone Number
        </label>
        <input 
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+254 .."
          className="w-full h-[44px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
        />
      </div>

      {/* 4. Message */}
      <div>
        <label className="block text-[13px] font-bold text-[#1A2B4C] mb-2">
          Message
        </label>
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Anything you'd like us to know"
          rows={4}
          className="w-full px-4 py-3 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84] resize-none"
        />
      </div>

      {/* 5. Submit Button */}
      <div className="mt-2">
        <button 
          type="submit"
          className="bg-[#2D8B84] hover:bg-[#236e68] text-white font-bold px-12 py-3 rounded-full text-[14px] transition-all duration-300 shadow-[0_4px_12px_rgba(45,139,132,0.15)] cursor-pointer"
        >
          Submit
        </button>
      </div>

    </form>
  );
};

export default ContactForm;
