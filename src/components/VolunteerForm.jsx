import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const VolunteerForm = () => {
  const [searchParams] = useSearchParams();
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [permission, setPermission] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const urlRole = searchParams.get('role');
    if (urlRole && ['teacher', 'school', 'fellow', 'partner'].includes(urlRole)) {
      setRole(urlRole);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setRole('');
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setOrganization('');
    setMessage('');
    setPermission(false);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 bg-[#FCF9F3] rounded-[24px] border border-[#2D8B84]/20 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
        <CheckCircle className="w-16 h-16 text-[#2D8B84] mb-4" />
        <h4 className="text-[22px] font-bold text-[#1A2B4C] mb-3">Application Received!</h4>
        <p className="text-[#475569] text-[15px] leading-relaxed max-w-md mb-6">
          Thank you for expressing your interest. A DigiTeach team member will reach out to you shortly to discuss how you can get involved.
        </p>
        <button 
          onClick={handleReset} 
          className="border border-[#2D8B84] text-[#2D8B84] hover:bg-[#2D8B84] hover:text-white rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left w-full max-w-[580px] font-sans">
      
      {/* 1. I am Dropdown */}
      <div>
        <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
          I am ... <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select 
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full h-[46px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84] appearance-none cursor-pointer"
          >
            <option value="" disabled>Choose the option that best describes you</option>
            <option value="fellow">Volunteer as a Facilitation Fellow</option>
            <option value="teacher">Join as a Teacher (Future Cohorts)</option>
            <option value="school">Host a Cohort (Schools/Institutions)</option>
            <option value="partner">Become a Tech/Funding Partner</option>
          </select>
          {/* Custom Select Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#475569]">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Full Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full h-[46px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
          />
        </div>
        <div>
          <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-[46px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
          />
        </div>
      </div>

      {/* 3. Phone & Location Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+254 ..."
            className="w-full h-[46px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
          />
        </div>
        <div>
          <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
            Location/ County
          </label>
          <input 
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="eg. Nairobi"
            className="w-full h-[46px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
          />
        </div>
      </div>

      {/* 4. Organization / School */}
      <div>
        <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
          Organization / School
        </label>
        <input 
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="If applicable"
          className="w-full h-[46px] px-4 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] placeholder-[#94A3B8] focus:outline-none focus:border-[#2D8B84] focus:ring-1 focus:ring-[#2D8B84]"
        />
      </div>

      {/* 5. Message */}
      <div>
        <label className="block text-[14px] font-bold text-[#1A2B4C] mb-2">
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

      {/* 6. Permission Checkbox */}
      <div className="flex items-start gap-3 mt-1">
        <input 
          type="checkbox"
          id="permission"
          checked={permission}
          onChange={(e) => setPermission(e.target.checked)}
          className="mt-1 w-4 h-4 text-[#2D8B84] border-[#E2E8F0] rounded focus:ring-[#2D8B84] cursor-pointer"
        />
        <label htmlFor="permission" className="text-[13px] text-[#475569] font-medium leading-relaxed select-none cursor-pointer">
          I give permission for the Digital Confidence Initiative to contact me about this.
        </label>
      </div>

      {/* 7. Submit Button */}
      <div className="mt-4">
        <button 
          type="submit"
          className="bg-[#2D8B84] hover:bg-[#236e68] text-white font-bold px-12 py-3.5 rounded-full text-[15px] transition-all duration-300 shadow-[0_4px_12px_rgba(45,139,132,0.15)] cursor-pointer"
        >
          Submit
        </button>
      </div>

    </form>
  );
};

export default VolunteerForm;
