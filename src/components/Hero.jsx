import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <img
        src="/logo.png"
        alt="Oriole Entertainment Logo"
        className="hero-logo"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width="380"
        height="380"
      />
      <h1 className="sr-only">Oriole Entertainment</h1>
      <p>Elevating live experiences. Premier artist management and event curation.</p>
    </section>
  );
};

export default Hero;
