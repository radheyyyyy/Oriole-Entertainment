import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink, FileText, Link2 } from 'lucide-react';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyData = [
  {
    id: "KANAN GILL- ORIOLE SPONSORSHIP DECK.pdf",
    name: "Kanan Gill",
    image: "kanan-gill.jpg",
    description: "Top standup comedian known for his witty humor and observational comedy.",
    shows: [
      "Feb 20, 2027 - Delhi",
      "Feb 21, 2027 - Delhi",
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/kanangill/"
  },

  {
    id: "Sonu Nigam x Aura Vibes.pdf",
    name: "Sonu Nigam",
    image: "sonu-nigam.jpg",
    description: "Legendary playback singer with a soulful voice.",
    shows: [
      "Nov 22, 2026 - Kolkata",
      "Nov 28, 2026 - Mumbai",
      "Dec 12, 2026 - Ahmedabad"
    ],
    instagram: "https://www.instagram.com/sonunigamofficial/"
  },

  {
    id: "Osho Jain .pdf",
    name: "Osho Jain",
    image: "osho-jain.jpg",
    description: "Indie singer-songwriter weaving magic with his acoustic tunes.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/oshojain_/"
  },

  {
    id: "Harsh Gujral sponsorship deck.pdf",
    name: "Harsh Gujral",
    image: "harsh-gujral.jpg",
    description: "High-energy standup comedian with great crowd work.",
    shows: [
      "Oct 9, 2026 - Delhi",
      "Oct 10, 2026 - Ghaziabad",
      "Oct 11, 2026 - Noida"
    ],
    instagram: "https://www.instagram.com/realharshgujral/"
  },

  {
    id: "Amit Tandon (2).pdf",
    name: "Amit Tandon",
    image: "amit-tandon.png",
    description: "The married guy comedy, highly relatable for family audiences.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/amitandon17/"
  },

  {
    id: "Avinash Gupta.pdf",
    name: "Avinash Gupta",
    image: "avinash-gupta.jpg",
    description: "Rising star with a unique blend of storytelling.",
    shows: [
      "Jan 3, 2027 - Mumbai",
      "Jan 16, 2027 - Raipur",
      "Jan 17, 2027 - Nagpur"
    ],
    instagram: "https://www.instagram.com/just.avinashgupta/"
  },

  {
    id: "Bassi Sponsorship.Deck (2).pdf",
    name: "Anubhav Singh Bassi",
    image: "bassi.jpg",
    description: "Master of relatable anecdotes and storytelling.",
    shows: [
      "Nov 28, 2026 - Mumbai",
      "Nov 29, 2026 - Mumbai",
      "Dec 12, 2026 - Delhi"
    ],
    instagram: "https://www.instagram.com/be_a_bassi/"
  },

  {
    id: "Khan Saab (3).pdf",
    name: "Khan Saab",
    image: "khan-saab.png",
    description: "Soulful Punjabi and Sufi singer.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/realkhansaab/"
  },

  {
    id: "Lakhwinder Wadali Deck (1).pdf",
    name: "Lakhwinder Wadali",
    image: "lakhwinder-wadali.jpg",
    description: "Renowned classical and Sufi artist.",
    shows: [
      "Oct 24, 2026 - Jaipur",
      "Oct 31, 2026 - Hyderabad",
      "Nov 14, 2026 - Ahmedabad"
    ],
    instagram: "https://www.instagram.com/lakhwinderwadaliofficial/"
  },

  {
    id: "Rabbi Shergill  (1).pdf",
    name: "Rabbi Shergill",
    image: "rabbi-shergill.jpg",
    description: "Sufi rock pioneer with thought-provoking lyrics.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/rabbishergill/"
  },

  {
    id: "Ravi Gupta Sponsorship Deck (2).pdf",
    name: "Ravi Gupta",
    image: "ravi-gupta.jpg",
    description: "Observational comedy that hits right at home.",
    shows: [
      "Nov 12, 2026 - Mohali",
      "Nov 13, 2026 - Noida",
      "Nov 14, 2026 - Delhi"
    ],
    instagram: "https://www.instagram.com/shudhdesicomic/"
  },

  {
    id: "Ruchika Lohiya - Chikka Deck (1).pdf",
    name: "Ruchika Lohiya (Chikka)",
    image: "ruchika-lohiya.jpg",
    description: "Hilarious and witty comic taking the internet by storm.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/__chikka/"
  },

  {
    id: "_Akanksha Grover Sponsership Deck_talkatora.pdf.pdf",
    name: "Akanksha Grover",
    image: "akanksha-grover.jpg",
    description: "Engaging and dynamic performer.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/akankssha.groverr/"
  }
];

    setArtists(dummyData);
    setLoading(false);
  }, []);

  const openPdf = (filename) => {
    // Open the PDF from the public/pdfs directory
    window.open(`/pdfs/${encodeURIComponent(filename)}`, '_blank');
  };

  return (
    <section className="artists-section">
      <h2>Our Roster</h2>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading artists...</p>
      ) : (
        <div className="artist-grid">
          {artists.map((artist) => {
            const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&background=random&size=150`;
            return (
              <div key={artist.id} className="artist-card" onClick={() => setSelectedArtist(artist)}>
                <div className="artist-image-container">
                  <img 
                    src={`/images/${artist.image}`} 
                    alt={artist.name} 
                    className="artist-image"
                    onError={(e) => {
                      if (e.target.src !== fallbackAvatar) {
                        e.target.src = fallbackAvatar;
                      }
                    }}
                  />
                </div>
                <h3>{artist.name}</h3>
                <p>{artist.description}</p>
              </div>
            );
          })}
        </div>
      )}

      {selectedArtist && (
        <div className="modal-overlay" onClick={() => setSelectedArtist(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedArtist(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <div className="modal-header-content">
                <img 
                  src={`/images/${selectedArtist.image}`} 
                  alt={selectedArtist.name} 
                  className="modal-avatar"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedArtist.name)}&background=random&size=150`;
                  }}
                />
                <div>
                  <h2>{selectedArtist.name}</h2>
                  <p className="modal-description">{selectedArtist.description}</p>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3><Calendar size={20} /> Upcoming Shows</h3>
                <ul className="shows-list">
                  {selectedArtist.shows.map((show, idx) => (
                    <li key={idx} className={show === "To Be Announced" ? "tba-show" : ""}>{show}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h3>Social Media</h3>
                <div className="social-links">
                  {selectedArtist.instagram && (
                    <a href={selectedArtist.instagram} target="_blank" rel="noopener noreferrer" className="social-button instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> 
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="btn-primary" onClick={() => openPdf(selectedArtist.id)}>
                <FileText size={20} /> View Sponsorship Deck (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistList;
