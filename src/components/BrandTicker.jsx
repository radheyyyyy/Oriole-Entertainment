import React from 'react';

// Brand list extracted from the "Collaborated With Brands" image + Gifting Partners image
const brands = [
  { name: 'Siggnature', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png', useName: true, nameStyle: { fontStyle: 'italic', fontFamily: 'Georgia, serif', color: '#1a1a2e' } },
  { name: 'Central Park', logo: null, useName: true, nameStyle: { color: '#2d7a2d', fontWeight: '700' } },
  { name: 'Red FM 93.5', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Red_FM_93.5_Logo.svg/1200px-Red_FM_93.5_Logo.svg.png', useName: false },
  { name: 'Nalis', logo: null, useName: true, nameStyle: { color: '#111', fontWeight: '800', letterSpacing: '2px' } },
  { name: 'Tote', logo: null, useName: true, nameStyle: { color: '#c9a849', fontWeight: '700', border: '2px solid #c9a849', borderRadius: '50%', padding: '2px 10px' } },
  { name: 'ZEROO2', logo: null, useName: true, nameStyle: { color: '#000', fontWeight: '900', letterSpacing: '1px' } },
  { name: 'brucha coffee', logo: null, useName: true, nameStyle: { color: '#4a3728', fontWeight: '600' } },
  { name: 'JioHotstar', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/JioHotstar_logo.png/220px-JioHotstar_logo.png', useName: false },
  { name: 'Bewakoof', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bewakoof.com_Logo.jpg/220px-Bewakoof.com_Logo.jpg', useName: false },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bosch-logo.svg/1200px-Bosch-logo.svg.png', useName: false },
  { name: 'Sprite', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sprite_2019_logo.svg/1200px-Sprite_2019_logo.svg.png', useName: false },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png', useName: false },
  { name: 'Bingo!', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Bingo_%28snack%29_logo.png/220px-Bingo_%28snack%29_logo.png', useName: true, nameStyle: { color: '#e63946', fontWeight: '900', fontSize: '1.1rem' } },
  { name: 'Daawat', logo: null, useName: true, nameStyle: { color: '#8b0000', fontWeight: '700' } },
  { name: 'Center Fresh', logo: null, useName: true, nameStyle: { color: '#009900', fontWeight: '700' } },
  { name: 'boAt', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Boat_lifestyle_logo.png/220px-Boat_lifestyle_logo.png', useName: false },
  { name: 'Goibibo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Goibibo_Logo.png/220px-Goibibo_Logo.png', useName: false },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png', useName: false },
  { name: 'Shaadi.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Shaadi.com_Logo.png/220px-Shaadi.com_Logo.png', useName: false },
  { name: 'Cadbury 5Star', logo: null, useName: true, nameStyle: { color: '#9b1d20', fontWeight: '800' } },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1280px-Spotify_logo_with_text.svg.png', useName: false },
  { name: 'Garnier', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Garnier_logo.svg/1280px-Garnier_logo.svg.png', useName: false },
  { name: 'Motorola', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Motorola-logo-stacked.svg/1280px-Motorola-logo-stacked.svg.png', useName: false },
  { name: 'Unacademy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Unacademy_new_logo.png/220px-Unacademy_new_logo.png', useName: false },
  { name: 'CRED', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cred_logo.png/220px-Cred_logo.png', useName: false },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png', useName: false },
  { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flipkart-logo.svg/1280px-Flipkart-logo.svg.png', useName: false },
  { name: 'Lakmé', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lakme_Logo.svg/1280px-Lakme_Logo.svg.png', useName: false },
  { name: 'Curly Tales', logo: null, useName: true, nameStyle: { color: '#c94b9a', fontWeight: '700', fontStyle: 'italic' } },
  { name: 'Crocs', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Crocs_logo.svg/1280px-Crocs_logo.svg.png', useName: false },
  { name: 'Urban Company', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Urban_Company_Logo.png/220px-Urban_Company_Logo.png', useName: false },
  { name: 'Love Beauty & Planet', logo: null, useName: true, nameStyle: { color: '#d63384', fontWeight: '700' } },
  { name: 'Liquid I.V.', logo: null, useName: true, nameStyle: { color: '#00aaff', fontWeight: '700' } },
  { name: 'Rentomojo', logo: null, useName: true, nameStyle: { color: '#e63946', fontWeight: '700' } },
  { name: 'Lensكart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lenskart_Logo.png/220px-Lenskart_Logo.png', useName: true, nameStyle: { color: '#0077b6', fontWeight: '700' } },
  { name: 'Housing.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Housing.com_Logo.png/220px-Housing.com_Logo.png', useName: false },
  { name: 'LEGO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1280px-LEGO_logo.svg.png', useName: false },
  // Gifting Partners
  { name: 'Almost Sane', logo: null, useName: true, nameStyle: { color: '#f0e040', fontWeight: '800', background: '#1a1a1a', padding: '2px 8px', borderRadius: '6px' } },
  { name: 'Kamasā', logo: null, useName: true, nameStyle: { color: '#c9a849', fontWeight: '700' } },
  { name: 'Soulliqo', logo: null, useName: true, nameStyle: { color: '#333', fontWeight: '700', fontStyle: 'italic' } },
  { name: 'NoGrav', logo: null, useName: true, nameStyle: { color: '#ff4757', fontWeight: '900', letterSpacing: '2px' } },
  { name: 'FIKN', logo: null, useName: true, nameStyle: { color: '#e63946', fontWeight: '900', fontSize: '1.2rem' } },
  { name: 'Crepdog Crew', logo: null, useName: true, nameStyle: { color: '#222', fontWeight: '800' } },
  { name: 'Rivona', logo: null, useName: true, nameStyle: { color: '#444', fontWeight: '700', fontStyle: 'italic' } },
  { name: 'Aurellia Creations', logo: null, useName: true, nameStyle: { color: '#5c8a3c', fontWeight: '700' } },
  { name: 'dmo•', logo: null, useName: true, nameStyle: { color: '#111', fontWeight: '800', letterSpacing: '1px' } },
];

// Duplicate list to create seamless loop
const allBrands = [...brands, ...brands];

const BrandTicker = () => {
  return (
    <section className="brand-ticker-section">
      <h2 className="brand-ticker-title">Brand Clientele</h2>
      <p className="brand-ticker-subtitle">Trusted by India's leading brands</p>
      <div className="brand-ticker-wrapper">
        <div className="brand-ticker-track">
          {allBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="brand-ticker-item">
              {!brand.useName && brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-logo-img"
                  onError={(e) => {
                    // Fall back to name text if logo fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              ) : null}
              <span
                className="brand-name-text"
                style={{
                  display: brand.useName ? 'block' : 'none',
                  ...(brand.nameStyle || {})
                }}
              >
                {brand.name}
              </span>
              {/* Hidden fallback shown via JS if img fails */}
              {!brand.useName && brand.logo && (
                <span
                  className="brand-name-text brand-name-fallback"
                  style={{ display: 'none', color: '#333', fontWeight: '700' }}
                >
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTicker;
