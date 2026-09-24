import React from 'react';

/**
 * Brand clientele list with local, high-definition assets.
 * All logos are served locally from /images/brands/ ensuring 100% reliability,
 * zero hotlink issues, and crisp rendering.
 */
const brands = [
  // ── Collaborated Brands (from image 1) ───────────────────────────
  { name: 'Amazon', src: '/images/brands/amazon.svg' },
  { name: 'Samsung', src: '/images/brands/samsung.svg' },
  { name: 'Netflix', src: '/images/brands/netflix.svg' },
  { name: 'Spotify', src: '/images/brands/spotify.svg' },
  { name: 'BOSCH', src: '/images/brands/bosch.svg' },
  { name: 'boAt', src: '/images/brands/boat.png' },
  { name: 'Flipkart', src: '/images/brands/flipkart.svg' },
  { name: 'Motorola', src: '/images/brands/motorola.svg' },
  { name: 'LEGO', src: '/images/brands/lego.svg' },
  { name: 'Garnier', src: '/images/brands/garnier.svg' },
  { name: 'Crocs', src: '/images/brands/crocs.svg' },
  { name: 'Lakmé', src: '/images/brands/lakme.svg' },
  { name: 'Sprite', src: '/images/brands/sprite.svg' },
  { name: 'Goibibo', src: '/images/brands/goibibo.png' },
  { name: 'CRED', src: '/images/brands/cred.png' },
  { name: 'Unacademy', src: '/images/brands/unacademy.png' },
  { name: 'Urban Company', src: '/images/brands/urbancompany.svg' },
  { name: 'Lenskart', src: '/images/brands/lenskart.png' },
  { name: 'Housing.com', src: '/images/brands/housing.png' },
  { name: 'Shaadi.com', src: '/images/brands/shaadi.svg' },
  { name: 'Bewakoof', src: '/images/brands/bewakoof.png' },
  { name: 'JioHotstar', src: '/images/brands/jiohotstar.png' },
  { name: 'Bingo!', src: '/images/brands/bingo.png' },
  { name: 'Daawat', src: '/images/brands/daawat.png' },
  { name: 'Center fresh', src: '/images/brands/centerfresh.png' },
  { name: 'Cadbury 5Star', src: '/images/brands/cadbury5star.png' },
  { name: 'Love Beauty & Planet', src: '/images/brands/lovebeautyplanet.png' },
  { name: 'Liquid I.V.', src: '/images/brands/liquidiv.png' },
  { name: 'Rentomojo', src: '/images/brands/rentomojo.svg' },
  { name: 'Curly Tales', src: '/images/brands/curlytales.png' },
  { name: 'Central Park', src: '/images/brands/centralpark.png' },
  { name: 'Siggnature', src: '/images/brands/siggnature.webp' },
  { name: 'Red FM 93.5', src: '/images/brands/redfm.jpg' },
  { name: 'ZERO02', src: '/images/brands/zeroo2.png' },
  { name: 'Natus', src: '/images/brands/natus.png' },
  { name: 'TOTE', src: '/images/brands/tote.png' },
  { name: 'Brucha Coffee', src: '/images/brands/brucha.png' },

  // ── Gifting Partners (from image 2) ──────────────────────────────
  { name: 'Almost Sane', src: '/images/brands/almostsane.png', darkBg: true },
  { name: 'Kamasā', src: '/images/brands/kamasa.png' },
  { name: 'Soulliqo', src: '/images/brands/soulliqo.png' },
  { name: 'NoGrav', src: '/images/brands/nograv.jpg', darkBg: true },
  { name: 'F/KN', src: '/images/brands/fikn.png' },
  { name: 'Crepdog Crew', src: '/images/brands/crepdogcrew.png', darkBg: true },
  { name: 'Rivona', src: '/images/brands/rivona.png' },
  { name: 'Aurellia Creations', src: '/images/brands/aurellia.png' },
  { name: 'dmo•', src: '/images/brands/dmodot.jpg' },
];

// Duplicate list for continuous seamless infinite marquee scroll
const allBrands = [...brands, ...brands];

const BrandItem = ({ brand }) => {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      className={`brand-ticker-item${brand.darkBg ? ' brand-dark-bg' : ''}`}
      title={brand.name}
    >
      {!hasError ? (
        <img
          src={brand.src}
          alt={brand.name}
          className="brand-logo-img"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <span className="brand-name-fallback">{brand.name}</span>
      )}
    </div>
  );
};

const BrandTicker = () => {
  return (
    <section className="brand-ticker-section">
      <h2 className="brand-ticker-title">Brand Clientele</h2>
      <p className="brand-ticker-subtitle">Trusted by India's leading brands &amp; partners</p>
      <div className="brand-ticker-wrapper">
        <div className="brand-ticker-track">
          {allBrands.map((brand, idx) => (
            <BrandItem key={`${brand.name}-${idx}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTicker;
