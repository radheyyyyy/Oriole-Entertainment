import React from 'react';

/**
 * All logo URLs are sourced directly from brand CDNs / Brandfetch CDN.
 * Logos are locally served from /images/brands/ where downloaded,
 * or from their official CDN for ones with reliable direct URLs.
 */
const brands = [
  // ── Major Collaborated Brands ─────────────────────────────────────
  {
    name: 'Amazon',
    logo: 'https://brandfetch.com/_next/image?url=https%3A%2F%2Fasset.brandfetch.io%2FidawOgYOsG%2FidTolbFI5F.png&w=128&q=75',
    src: 'https://asset.brandfetch.io/idawOgYOsG/idTolbFI5F.png',
  },
  {
    name: 'Samsung',
    src: 'https://asset.brandfetch.io/idwjZjSKdm/idDWUaefJ9.png',
  },
  {
    name: 'Netflix',
    src: 'https://asset.brandfetch.io/idqou_o_3-/id6uSCpEqE.png',
  },
  {
    name: 'Spotify',
    src: 'https://asset.brandfetch.io/idq7QMdJMz/idxevkBLnv.png',
  },
  {
    name: 'boAt',
    src: 'https://asset.brandfetch.io/idNJdGJuoO/id3CGQVHSO.png',
  },
  {
    name: 'Bosch',
    src: 'https://asset.brandfetch.io/idBZRlXkXX/idO4K8l_Aj.png',
  },
  {
    name: 'Flipkart',
    src: 'https://asset.brandfetch.io/idhbh9wFjv/idlAYWcvBC.png',
  },
  {
    name: 'Motorola',
    src: 'https://asset.brandfetch.io/idvKAkJnAu/idk5j3GAtA.png',
  },
  {
    name: 'LEGO',
    src: 'https://asset.brandfetch.io/idEDSaQMnJ/idawjT-lH1.png',
  },
  {
    name: 'Garnier',
    src: 'https://asset.brandfetch.io/id_bFt0C5v/idL1wLnmvq.png',
  },
  {
    name: 'Crocs',
    src: 'https://asset.brandfetch.io/idg97-ykCn/idnPj-bGxn.png',
  },
  {
    name: 'Lakmé',
    src: 'https://asset.brandfetch.io/idQXSjqJIV/id-k70GNDI.png',
  },
  {
    name: 'Sprite',
    src: 'https://asset.brandfetch.io/iduvNDH_q0/idGevTNBOY.png',
  },
  {
    name: 'Goibibo',
    src: 'https://asset.brandfetch.io/id2qyFR-Sk/idZX1A0sGO.png',
  },
  {
    name: 'CRED',
    src: 'https://asset.brandfetch.io/idFxOiDuTZ/idEE6AMbTR.png',
  },
  {
    name: 'Unacademy',
    src: 'https://asset.brandfetch.io/idxrXYSF-s/id2vQ9GMCB.png',
  },
  {
    name: 'Urban Company',
    src: 'https://asset.brandfetch.io/id65eCgEq-/idSsXvtR9-.png',
  },
  {
    name: 'Lenskart',
    src: 'https://asset.brandfetch.io/idUPH2GKFF/idwvqeEcfp.png',
  },
  {
    name: 'Housing.com',
    src: 'https://asset.brandfetch.io/idM6g2SDXU/id7R1QqXBH.png',
  },
  {
    name: 'Shaadi.com',
    src: 'https://asset.brandfetch.io/id_X3a7mVl/id4cRgv3_V.png',
  },
  {
    name: 'Bewakoof',
    src: 'https://asset.brandfetch.io/idikTFfJo_/idLjl9KFNJ.png',
  },
  {
    name: 'JioHotstar',
    src: 'https://asset.brandfetch.io/idMiLqoZMo/idsMVr7i7B.png',
  },
  // ── Brands with direct website CDN logos ──────────────────────────
  {
    name: 'Siggnature',
    src: 'https://dbsiggnature.in/wp-content/uploads/2024/01/contact-logo.webp',
  },
  {
    name: 'Red FM 93.5',
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Red_FM_93.5_Logo.svg/320px-Red_FM_93.5_Logo.svg.png',
    fallbackSrc: 'https://redfm.in/images/logo.png',
  },
  {
    name: 'ZEROO2',
    src: 'https://zero02.in/cdn/shop/files/zero02_files-01.png?v=1775210247',
  },
  {
    name: 'Daawat',
    src: 'https://asset.brandfetch.io/idTfp4YBoT/id87Ib4Nmz.png',
  },
  {
    name: 'Bingo!',
    src: 'https://asset.brandfetch.io/ido1YhBoWU/id9lkxFEv4.png',
  },
  {
    name: 'Center Fresh',
    src: 'https://asset.brandfetch.io/idoxFDmpH6/ido36IwfJk.png',
  },
  {
    name: 'Cadbury 5Star',
    src: 'https://asset.brandfetch.io/idcJ_qNmgE/id0IM82Fvh.png',
  },
  {
    name: 'Love Beauty & Planet',
    src: 'https://asset.brandfetch.io/idHi6V2M9k/idvXGxMnNq.png',
  },
  {
    name: 'Liquid I.V.',
    src: 'https://asset.brandfetch.io/idDjV8xKCe/idXwOJWGnZ.png',
  },
  {
    name: 'Rentomojo',
    src: 'https://asset.brandfetch.io/id3bLR0RW7/idN3Yp_R5V.png',
  },
  {
    name: 'Curly Tales',
    src: 'https://asset.brandfetch.io/idm2CxFJMv/id5_AAFJGK.png',
  },
  {
    name: 'Central Park',
    src: 'https://asset.brandfetch.io/idThh3-XFl/idWp0PzDkB.png',
  },
  // ── Gifting Partners ──────────────────────────────────────────────
  {
    name: 'Almost Sane',
    src: 'https://almostsane.in/cdn/shop/t/13/assets/logo.png?v=896',
    darkBg: true,
  },
  {
    name: 'Kamasā',
    src: 'https://kamasa.in/cdn/shop/files/Asset_1_3x_1_1.png?v=1759144873',
  },
  {
    name: 'TOTE',
    src: 'https://asset.brandfetch.io/id-Pog3Mmz/idCOGxOzrU.png',
  },
  {
    name: 'Brucha Coffee',
    src: 'https://asset.brandfetch.io/idnMnHzMIV/id5Yq7F2Z3.png',
  },
  {
    name: 'Soulliqo',
    src: 'https://soulliqo.com/images/original-logo.png',
  },
  {
    name: 'NoGrav',
    src: 'https://thenograv.com/cdn/shop/files/Artboard_46.jpg?v=1777445906',
  },
  {
    name: 'FIKN',
    src: 'https://fikn.com/cdn/shop/files/WhatsApp_Image_2026-05-19_at_19.00.03.jpg?v=1779205448',
  },
  {
    name: 'Crepdog Crew',
    src: 'https://crepdogcrew.com/cdn/shop/files/COM_White-1.png?v=1656328337&width=400',
    darkBg: true,
  },
  {
    name: 'Rivona',
    src: 'https://rivona.in/cdn/shop/files/RivonaLogo_FullAsset_1.jpg?v=1734983387',
  },
  {
    name: 'Aurellia Creations',
    src: 'https://asset.brandfetch.io/id4P4G5rnB/idYvPqoMaH.png',
  },
  {
    name: 'dmo•',
    src: 'https://www.dmodot.com/cdn/shop/files/logo_dmodot.jpg?v=1771320417&width=300',
  },
];

// Duplicate for seamless infinite loop
const allBrands = [...brands, ...brands];

const BrandItem = ({ brand }) => {
  const [imgError, setImgError] = React.useState(false);
  const [usedFallback, setUsedFallback] = React.useState(false);

  const handleError = () => {
    if (!usedFallback && brand.fallbackSrc) {
      setUsedFallback(true);
    } else {
      setImgError(true);
    }
  };

  const currentSrc = usedFallback ? brand.fallbackSrc : brand.src;

  return (
    <div className={`brand-ticker-item${brand.darkBg ? ' brand-dark-bg' : ''}`}>
      {!imgError ? (
        <img
          src={currentSrc}
          alt={brand.name}
          className="brand-logo-img"
          onError={handleError}
          loading="lazy"
        />
      ) : (
        // Only show name text if image completely fails
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
