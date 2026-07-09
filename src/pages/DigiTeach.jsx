import React from 'react';
import { BookOpen, Shield, Globe, Award, HelpCircle } from 'lucide-react';
import VolunteerForm from '../components/VolunteerForm';

const DigiTeach = () => {
  const curriculum = [
    {
      title: 'Digital Foundations',
      icon: <BookOpen size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Understand computer anatomy, file naming systems, structured directories, shortcut commands, and typing accuracy fundamentals.',
      topics: ['Hardware and operating systems', 'Saving and searching for files', 'Folders management', 'Keyboard shortcuts']
    },
    {
      title: 'Internet, Email & Cloud',
      icon: <Globe size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Master browsers, clean search queries, Google Drive structure, email attachments, uploads, and collaborative tools.',
      topics: ['Google Workspace tools', 'Email communication best practices', 'Cloud storage and file sharing', 'Advanced search operators']
    },
    {
      title: 'Teacher Productivity',
      icon: <Award size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Create lesson plans, dynamic marksheets, tests, report templates, and slide presentations using Google Docs, Sheets, and Slides.',
      topics: ['Sheets formulas for gradebooks', 'Professional presentation design', 'Lesson note templates in Docs', 'Digital scheduling']
    },
    {
      title: 'Digital Safety & Hygiene',
      icon: <Shield size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Prevent cyber fraud, scam links, phishing, and protect students. Understand password managers and digital footprint settings.',
      topics: ['Phishing detection methods', 'Mobile money scam prevention', 'Student data protection', 'Secure accounts configuration']
    }
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* DigiTeach Hero Banner */}
      <div className="relative w-full aspect-[720/173] overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/digiteach-hero.png')",
          }}
        />
        <h1 className="sr-only">DigiTeach</h1>
      </div>

      {/* What is DigiTeach Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          
          {/* Left Column: Text */}
          <div className="w-full md:max-w-[480px] text-left">
            <div 
              className="italic text-2xl mb-4" 
              style={{ fontFamily: "'Caveat', cursive", color: '#84cc16' }}
            >
              No Question is too Basic!
            </div>
            
            <h2 className="text-[32px] md:text-[36px] font-extrabold text-[#1A2B4C] mb-6 leading-tight">
              What is DigiTeach?
            </h2>

            <h4 className="text-[16px] md:text-[18px] font-bold text-[#1A2B4C] mb-4 leading-relaxed">
              A teacher digital confidence programme.
            </h4>

            <p className="text-[#475569] text-[14px] leading-relaxed font-medium">
              It starts with teachers because educators are often the first enablers, knowledge carriers and practical problem-solvers in their communities.
            </p>
          </div>

          {/* Right Column: Photo */}
          <div className="w-full md:w-[350px] flex-shrink-0 flex justify-center">
            <div className="w-full max-w-[350px] rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-[#E2E8F0]">
              <img 
                src="/images/digiteach-man-laptop.png" 
                alt="Teacher using laptop" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Curriculum Overview */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1A2B4C', fontWeight: 700 }}>Curriculum & Focus Areas</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '15px auto 0', fontSize: '1.1rem' }}>
              Designed explicitly for teachers, this curriculum covers basic tasks that simplify administrative work and elevate daily classroom learning.
            </p>
          </div>

          <div className="grid-2">
            {curriculum.map((item, idx) => (
              <div key={idx} className="card-hover" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '16px',
                  backgroundColor: 'rgba(45, 139, 132, 0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#1A2B4C', marginBottom: '10px', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', marginBottom: '15px', lineHeight: 1.7 }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.topics.map((t, index) => (
                      <span key={index} style={{
                        fontSize: '0.8rem',
                        padding: '4px 10px',
                        backgroundColor: '#FCF9F3',
                        color: '#2D8B84',
                        border: '1px solid rgba(45,139,132,0.15)',
                        borderRadius: '99px',
                        fontWeight: 600
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Path & Registration */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', color: '#1A2B4C', fontWeight: 700, marginBottom: '20px' }}>
                Bring DigiTeach to Your School
              </h2>
              <p style={{ color: '#475569', marginBottom: '20px', lineHeight: 1.8 }}>
                The DigiTeach pilot operates through cohort packages. We pair local schools containing dedicated computer labs or network facilities with our trained Digital Fellows who deliver the training locally.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontWeight: 800, color: '#2D8B84', fontSize: '1.25rem' }}>01</div>
                  <div>
                    <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Cohort Selection</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569' }}>We select schools expressing structural readiness and internet capability.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontWeight: 800, color: '#2D8B84', fontSize: '1.25rem' }}>02</div>
                  <div>
                    <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>In-Person Training</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569' }}>Fellows visit weekly, conducting hands-on tasks and feedback check-ins.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontWeight: 800, color: '#2D8B84', fontSize: '1.25rem' }}>03</div>
                  <div>
                    <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Evaluation & Certification</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569' }}>Practical tests certify digital autonomy in teacher productivity and security.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#FCF9F3',
              padding: '40px',
              borderRadius: '28px',
              border: '1px solid rgba(45, 139, 132, 0.1)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ color: '#1A2B4C', fontWeight: 700, marginBottom: '20px', fontSize: '1.5rem' }}>Register Cohort / Partner Interest</h3>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigiTeach;
