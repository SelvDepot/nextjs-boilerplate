'use client';

import React from 'react';

const LazyVideo = () => {
  return (
    <video
      controls
      style={{
        width: '100%',
        maxWidth: '700px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <source src="/intro.mp4" type="video/mp4" />
      Din browser understøtter ikke video-tagget.
    </video>
  );
};

export default LazyVideo;