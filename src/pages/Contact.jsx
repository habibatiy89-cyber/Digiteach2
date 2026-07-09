import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

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

      <div style={{ padding: '80px 0 100px' }}>
        <div className="container">

        <div className="grid-2" style={{ gap: '60px', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', color: '#1A2B4C', marginBottom: '20px', fontWeight: 700 }}>Get In Touch</h3>
            <p style={{ color: '#475569', marginBottom: '30px', lineHeight: 1.8 }}>
              Feel free to visit our main office in Nairobi, call us during work hours, or drop us an email anytime. We respond within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(45, 139, 132, 0.1)', color: '#2D8B84', borderRadius: '50%' }}><Mail /></div>
                <div>
                  <h5 style={{ margin: 0, color: '#1A2B4C' }}>Email Address</h5>
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>support@digiteach.org</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(45, 139, 132, 0.1)', color: '#2D8B84', borderRadius: '50%' }}><Phone /></div>
                <div>
                  <h5 style={{ margin: 0, color: '#1A2B4C' }}>Phone Number</h5>
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>+254 700 111 222</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(45, 139, 132, 0.1)', color: '#2D8B84', borderRadius: '50%' }}><MapPin /></div>
                <div>
                  <h5 style={{ margin: 0, color: '#1A2B4C' }}>Main Office</h5>
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '28px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(45, 139, 132, 0.1)'
          }}>
            <h3 style={{ color: '#1A2B4C', fontWeight: 700, marginBottom: '20px', fontSize: '1.5rem' }}>Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
