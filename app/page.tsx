'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showPitch, setShowPitch] = useState(false);
  const [currentPitchPage, setCurrentPitchPage] = useState(0);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [pdfUrls, setPdfUrls] = useState<string[]>([]);

  const pitchContent = [
    { title: 'I. Indledning – Hvad er MitDepot?', content: <p>Content here...</p> },
    // Add other pitch content as before
  ];

  const handlePitchAccess = () => setShowPasswordModal(true);
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '9945') {
      setShowPitch(true);
      setActiveSection('Pitch');
      setCurrentPitchPage(0);
      setShowPasswordModal(false);
      setPasswordInput('');
    } else {
      alert('Forkert adgangskode. Prøv igen.');
      setPasswordInput('');
    }
  };
  const handleDownloadAccess = async () => {
    try {
      console.log('Fetching PDF links...');
      const response = await fetch('/api/pdfs', { method: 'GET' });
      console.log('Response status:', response.status);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log('Response data:', data);
      if (data.urls && Array.isArray(data.urls)) {
        setPdfUrls(data.urls);
        setShowDownloadModal(true);
      } else {
        alert('No URLs found in response');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Failed to fetch PDF links: ' + error.message);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'p') {
        event.preventDefault();
        handlePitchAccess();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [passwordInput]);

  const handleNextPage = () => currentPitchPage < pitchContent.length - 1 && setCurrentPitchPage(currentPitchPage + 1);
  const handlePreviousPage = () => currentPitchPage > 0 && setCurrentPitchPage(currentPitchPage - 1);
  const handleClosePitch = () => {
    setShowPitch(false);
    setActiveSection(null);
    setCurrentPitchPage(0);
  };
  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setPasswordInput('');
  };
  const handleCloseDownloadModal = () => {
    setShowDownloadModal(false);
    setPdfUrls([]);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>MitDepot</h1>
          <h2 className={styles.subtitle}>Vi hjælper dig eje dine Bitcoin selv – og sove trygt.<br /><span className={styles.subtitleNormal}>Sikkert. Privat. For evigt.</span></h2>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <p className={styles.intro}>Ingen mellemled. Ingen bureaukrati. Kun dig og dine Bitcoin på dine præmisser.<br />Dine penge. Din fremtid. Din familie. Tag kontrol.</p>
        <div className={styles.cta}>
          <a href="https://calendly.com/selvdepot/30min" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Book et gratis 30-minutters møde</a>
          <button onClick={handleDownloadAccess} className={`${styles.ctaButton} ${styles.ctaButtonGreen}`}>Download Gratis PDF'er</button>
        </div>
        {showDownloadModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>Download Gratis PDF'er</h3>
              <p>Her kan du downloade vores forberedelsesmaterialer:</p>
              <ul className={styles.downloadList}>
                {pdfUrls.length > 0 ? (
                  pdfUrls.map((url, index) => (
                    <li key={index}><a href={url} download className={styles.downloadButton}>{['MitDepot Recovery Ark', 'MitDepot AntiScam', 'MitDepot One Pager'][index]}</a></li>
                  ))
                ) : (
                  <li>No links available</li>
                )}
              </ul>
              <button onClick={handleCloseDownloadModal} className={styles.cancelButton}>Luk</button>
            </div>
          </div>
        )}
        {/* Other sections */}
      </main>
  );
}