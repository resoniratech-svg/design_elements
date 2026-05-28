import { useState } from 'react';

function EmailModal({ isOpen, onClose, email, subject = '', body = '' }) {
  if (!isOpen) return null;

  const gmailUrl = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${encodeURIComponent(email)}${
    subject ? `&su=${encodeURIComponent(subject)}` : ''
  }${body ? `&body=${encodeURIComponent(body)}` : ''}`;

  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}${
    subject ? `&subject=${encodeURIComponent(subject)}` : ''
  }${body ? `&body=${encodeURIComponent(body)}` : ''}`;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        fontFamily: "'Outfit', sans-serif"
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '2.5rem',
          maxWidth: '440px',
          width: '95%',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
          border: '1px solid rgba(0,0,0,0.05)',
          position: 'relative',
          animation: 'fadeIn 0.25s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'none',
            border: 'none',
            fontSize: '1.8rem',
            cursor: 'pointer',
            color: '#9ca3af',
            lineHeight: 1,
            padding: 0
          }}
          onClick={onClose}
        >
          &times;
        </button>
        
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}>
          {subject ? 'Send Your Inquiry' : 'Contact via Email'}
        </h3>
        
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1.5rem', wordBreak: 'break-all' }}>
          Select how you would like to send email to:<br />
          <strong style={{ color: '#111', fontSize: '0.95rem' }}>{email}</strong>
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <a 
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{
              padding: '0.85rem 1.2rem',
              background: '#fcfcfc',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              fontSize: '0.95rem',
              transition: 'background 0.2s',
              boxSizing: 'border-box'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseOut={(e) => e.currentTarget.style.background = '#fcfcfc'}
          >
            <span style={{ fontSize: '1.2rem' }}>✉️</span> Open in Gmail (Google Mail)
          </a>
          
          <a 
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            style={{
              padding: '0.85rem 1.2rem',
              background: '#fcfcfc',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              fontSize: '0.95rem',
              transition: 'background 0.2s',
              boxSizing: 'border-box'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseOut={(e) => e.currentTarget.style.background = '#fcfcfc'}
          >
            <span style={{ fontSize: '1.2rem' }}>💻</span> Open in Outlook (Microsoft Mail)
          </a>
        </div>

        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6', fontSize: '0.75rem', color: '#9ca3af', lineHeight: '1.4' }}>
          * Choose <strong>Gmail (Google Mail)</strong> or <strong>Outlook (Microsoft Mail)</strong> to open the compose email page directly in your web browser.
        </div>
      </div>
    </div>
  );
}

export default EmailModal;
