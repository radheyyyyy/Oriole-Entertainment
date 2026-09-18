import React, { useState, useEffect } from 'react';
import { X, Calendar, ExternalLink, FileText, Link2 } from 'lucide-react';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyData = [
  {
    id: "KANAN GILL- ORIOLE SPONSORSHIP DECK_compressed.pdf",
    name: "Kanan Gill",
    image: "kanan-gill.jpg",
    description: "Top standup comedian known for his witty humor and observational comedy.",
    shows: [
      "Feb 20, 2027 - Delhi",
      "Feb 21, 2027 - Delhi"
    ],
    instagram: "https://www.instagram.com/kanangill/"
  },

  {
    id: "Sonu Nigam x Aura Vibes_compressed.pdf",
    name: "Sonu Nigam",
    image: "sonu-nigam.jpg",
    description: "Legendary playback singer with a soulful voice.",
    shows: [
      "Nov 22, 2026 - Kolkata",
      "Nov 28, 2026 - Mumbai",
      "Dec 12, 2026 - Ahmedabad",
      "Dec 19, 2026 - Hyderabad",
      "Feb 14, 2027 - Delhi"
    ],
    instagram: "https://www.instagram.com/sonunigamofficial/"
  },

  {
    id: "Osho Jain  (1)_compressed.pdf",
    name: "Osho Jain",
    image: "osho-jain.jpg",
    description: "Indie singer-songwriter weaving magic with his acoustic tunes.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/oshojain_/"
  },

  {
    id: "Harsh Gujral sponsorship deck_compressed.pdf",
    name: "Harsh Gujral",
    image: "harsh-gujral.jpg",
    description: "High-energy standup comedian with great crowd work.",
    shows: [
      "Oct 9, 2026 - Delhi",
      "Oct 10, 2026 - Ghaziabad",
      "Oct 11, 2026 - Noida",
      "Oct 16, 2026 - Nasik",
      "Oct 17, 2026 - Pune",
      "Oct 18, 2026 - Mumbai",
      "Nov 19, 2026 - Durg",
      "Nov 20, 2026 - Raipur",
      "Nov 21, 2026 - Bilaspur",
      "Nov 22, 2026 - Sanghli",
      "Nov 27, 2026 - Surat",
      "Nov 28, 2026 - Vadodara",
      "Nov 29, 2026 - Ahmedabad",
      "Nov 30, 2026 - Rajkot",
      "Dec 4, 2026 - Bhubaneswar",
      "Dec 5, 2026 - Patna",
      "Dec 6, 2026 - Kolkata",
      "Dec 11, 2026 - Bengaluru",
      "Dec 12, 2026 - Bengaluru",
      "Dec 13, 2026 - Bengaluru",
      "Dec 17, 2026 - Agra",
      "Dec 18, 2026 - Kanpur",
      "Dec 19, 2026 - Lucknow",
      "Dec 20, 2026 - Varanasi",
      "Dec 24, 2026 - Bikaner",
      "Dec 25, 2026 - Jodhpur",
      "Dec 26, 2026 - Udaipur",
      "Dec 27, 2026 - Jaipur",
      "Dec 28, 2026 - Alwar",
      "Jan 1, 2027 - Nashik",
      "Jan 2, 2027 - Aurangabad",
      "Jan 3, 2027 - Mumbai",
      "Jan 8, 2027 - Goa",
      "Jan 9, 2027 - Mangalore",
      "Jan 10, 2027 - Bangalore",
      "Jan 15, 2027 - Kullu",
      "Jan 16, 2027 - Delhi",
      "Jan 17, 2027 - Chandigarh",
      "Jan 22, 2027 - Surat",
      "Jan 23, 2027 - Vadodara",
      "Jan 24, 2027 - Ahmedabad",
      "Jan 29, 2027 - Deoghar",
      "Jan 30, 2027 - Ranchi",
      "Jan 31, 2027 - Jamshedpur",
      "Feb 5, 2027 - Pune",
      "Feb 6, 2027 - Mumbai",
      "Feb 7, 2027 - Bangalore",
      "Feb 12, 2027 - Chennai",
      "Feb 13, 2027 - Kolkata",
      "Feb 14, 2027 - Asansol",
      "Feb 19, 2027 - Jabalpur",
      "Feb 20, 2027 - Bhopal",
      "Feb 21, 2027 - Indore",
      "Feb 26, 2027 - Durg",
      "Feb 27, 2027 - Raipur",
      "Feb 28, 2027 - Bilaspur",
      "Mar 5, 2027 - Delhi",
      "Mar 6, 2027 - Mumbai",
      "Mar 7, 2027 - Pune",
      "Mar 12, 2027 - Bangalore",
      "Mar 13, 2027 - Chennai",
      "Mar 14, 2027 - Hyderabad"
    ],
    instagram: "https://www.instagram.com/realharshgujral/"
  },

  {
    id: "Amit Tandon (2)_compressed.pdf",
    name: "Amit Tandon",
    image: "amit-tandon.png",
    description: "The married guy comedy, highly relatable for family audiences.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/amitandon17/"
  },

  {
    id: "Avinash Gupta_compressed.pdf",
    name: "Avinash Gupta",
    image: "avinash-gupta.jpg",
    description: "Rising star with a unique blend of storytelling.",
    shows: [
      "Jan 3, 2027 - Mumbai",
      "Jan 16, 2027 - Raipur",
      "Jan 17, 2027 - Nagpur",
      "Jan 22, 2027 - Vadodara",
      "Jan 23, 2027 - Ahmedabad",
      "Jan 24, 2027 - Ahmedabad",
      "Jan 30, 2027 - Chennai",
      "Jan 31, 2027 - Bangalore",
      "Feb 6, 2027 - TBA",
      "Feb 7, 2027 - Delhi",
      "Feb 13, 2027 - Kolkata",
      "Feb 14, 2027 - Indore",
      "Feb 20, 2027 - Pune",
      "Feb 21, 2027 - Mumbai"
    ],
    instagram: "https://www.instagram.com/just.avinashgupta/"
  },

  {
    id: "Bassi Sponsorship.Deck (2)_compressed.pdf",
    name: "Anubhav Singh Bassi",
    image: "bassi.jpg",
    description: "Master of relatable anecdotes and storytelling.",
    shows: [
      "Nov 28, 2026 - Mumbai",
      "Nov 29, 2026 - Mumbai",
      "Dec 12, 2026 - Delhi",
      "Dec 13, 2026 - Delhi"
    ],
    instagram: "https://www.instagram.com/be_a_bassi/"
  },

  {
    id: "Khan Saab (3)_compressed.pdf",
    name: "Khan Saab",
    image: "khan-saab.png",
    description: "Soulful Punjabi and Sufi singer.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/realkhansaab/"
  },

  {
    id: "Lakhwinder Wadali Deck (1)_compressed.pdf",
    name: "Lakhwinder Wadali",
    image: "lakhwinder-wadali.jpg",
    description: "Renowned classical and Sufi artist.",
    shows: [
      "Oct 24, 2026 - Jaipur",
      "Oct 31, 2026 - Hyderabad",
      "Nov 14, 2026 - Ahmedabad",
      "Nov 28, 2026 - Delhi",
      "Dec 25, 2026 - Bangalore",
      "Jan 9, 2027 - Chandigarh",
      "Jan 16, 2027 - Pune",
      "Jan 20, 2027 - Ludhiana",
      "Jan 23, 2027 - Kolkata",
      "Feb 14, 2027 - Mumbai",
      "Feb 27, 2027 - Gurgaon"
    ],
    instagram: "https://www.instagram.com/lakhwinderwadaliofficial/"
  },

  {
    id: "Rabbi Shergill  (1)_compressed.pdf",
    name: "Rabbi Shergill",
    image: "rabbi-shergill.jpg",
    description: "Sufi rock pioneer with thought-provoking lyrics.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/rabbishergill/"
  },

  {
    id: "Ravi Gupta Sponsorship Deck (2)_compressed.pdf",
    name: "Ravi Gupta",
    image: "ravi-gupta.jpg",
    description: "Observational comedy that hits right at home.",
    shows: [
      "Nov 12, 2026 - Mohali",
      "Nov 13, 2026 - Noida",
      "Nov 14, 2026 - Delhi",
      "Nov 15, 2026 - Kolkata",
      "Nov 19, 2026 - Mathura",
      "Nov 20, 2026 - Mumbai",
      "Nov 21, 2026 - Pune",
      "Nov 22, 2026 - Bangalore",
      "Nov 26, 2026 - Amritsar",
      "Nov 27, 2026 - Ludhiana",
      "Nov 28, 2026 - Bathinda",
      "Nov 29, 2026 - Chandigarh",
      "Dec 4, 2026 - Mumbai",
      "Dec 5, 2026 - Chennai",
      "Dec 6, 2026 - Hyderabad",
      "Dec 10, 2026 - Indore",
      "Dec 11, 2026 - Bhopal",
      "Dec 12, 2026 - Agra",
      "Dec 13, 2026 - Gwalior",
      "Dec 17, 2026 - Bareilly",
      "Dec 18, 2026 - Rampur",
      "Dec 19, 2026 - Haldwani",
      "Dec 20, 2026 - Dehradun",
      "Dec 25, 2026 - Guwahati",
      "Dec 26, 2026 - Mumbai",
      "Dec 27, 2026 - Amravati",
      "Dec 28, 2026 - Akola",
      "Dec 31, 2026 - Durg",
      "Jan 1, 2027 - Raipur",
      "Jan 2, 2027 - Bilaspur",
      "Jan 3, 2027 - Sanghli",
      "Jan 8, 2027 - Surat",
      "Jan 9, 2027 - Vadodara",
      "Jan 10, 2027 - Ahmedabad",
      "Jan 11, 2027 - Rajkot",
      "Jan 15, 2027 - Bhubaneswar",
      "Jan 16, 2027 - Patna",
      "Jan 17, 2027 - Kolkata",
      "Jan 22, 2027 - Bangalore",
      "Jan 23, 2027 - Bangalore",
      "Jan 24, 2027 - Bangalore",
      "Jan 28, 2027 - Agra",
      "Jan 29, 2027 - Kanpur",
      "Jan 30, 2027 - Lucknow",
      "Jan 31, 2027 - Varanasi",
      "Feb 4, 2027 - Bikaner",
      "Feb 5, 2027 - Jodhpur",
      "Feb 6, 2027 - Udaipur",
      "Feb 7, 2027 - Jaipur",
      "Feb 8, 2027 - Alwar",
      "Feb 12, 2027 - Nashik",
      "Feb 13, 2027 - Aurangabad",
      "Feb 14, 2027 - Mumbai",
      "Feb 19, 2027 - Goa",
      "Feb 20, 2027 - Mangalore",
      "Feb 21, 2027 - Bangalore",
      "Feb 26, 2027 - Kullu",
      "Feb 27, 2027 - Delhi",
      "Feb 28, 2027 - Chandigarh",
      "Mar 5, 2027 - Surat",
      "Mar 6, 2027 - Vadodara",
      "Mar 7, 2027 - Ahmedabad",
      "Mar 12, 2027 - Devgarh",
      "Mar 13, 2027 - Ranchi",
      "Mar 14, 2027 - Jamshedpur"
    ],
    instagram: "https://www.instagram.com/shudhdesicomic/"
  },

  {
    id: "Ruchika Lohiya - Chikka Deck (1)_compressed.pdf",
    name: "Ruchika Lohiya (Chikka)",
    image: "ruchika-lohiya.jpg",
    description: "Hilarious and witty comic taking the internet by storm.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/__chikka/"
  },

  {
    id: "_Akanksha Grover Sponsership Deck_talkatora.pdf_compressed.pdf",
    name: "Akanksha Grover",
    image: "akanksha-grover.jpg",
    description: "Engaging and dynamic performer.",
    shows: [
      "To Be Announced"
    ],
    instagram: "https://www.instagram.com/akankssha.groverr/"
  },

  {
    id: "Karma Live  October 2026_compressed.pdf",
    name: "Karma",
    image: "karma.jpg",
    description: "Dynamic rapper and hip-hop artist with hard-hitting lyrics.",
    shows: ["To Be Announced"],
    instagram: "https://www.instagram.com/karmathelekhak/?hl=en"
  }

];

    setArtists(dummyData);
    setLoading(false);
  }, []);

  const openPdf = (filename) => {
    // Open the PDF from the public/pdfs directory
    window.open(`/pdfs/${encodeURIComponent(filename)}`, '_blank');
  };

  const groupShowsByMonth = (shows) => {
    const grouped = {};
    const tba = [];

    shows.forEach(show => {
      if (show === "To Be Announced" || show.toLowerCase().includes("tba")) {
        tba.push({ original: show });
        return;
      }

      const splitIndex = show.indexOf('-');
      if (splitIndex !== -1) {
        const datePart = show.substring(0, splitIndex).trim();
        const cityPart = show.substring(splitIndex + 1).trim();

        const dateWords = datePart.replace(',', '').split(' ');
        if (dateWords.length >= 3) {
          const monthYear = `${dateWords[0]} ${dateWords[2]}`;
          if (!grouped[monthYear]) {
            grouped[monthYear] = [];
          }
          grouped[monthYear].push({ date: datePart, city: cityPart, original: show });
        } else {
          tba.push({ original: show });
        }
      } else {
        tba.push({ original: show });
      }
    });

    return { grouped, tba };
  };

  return (
    <section className="artists-section">
      <h2>Upcoming Tours</h2>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading artists...</p>
      ) : (
        <div className="artist-grid">
          {artists.map((artist) => {
            const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(artist.name)}&background=random&size=150`;
            const { grouped, tba } = groupShowsByMonth(artist.shows);
            
            return (
              <div key={artist.id} className="artist-card expanded-card">
                <div className="artist-header">
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
                  <div className="artist-info">
                    <h3>{artist.name}</h3>
                    <p className="artist-desc">{artist.description}</p>
                    <div className="card-actions">
                      {artist.instagram && (
                        <a href={artist.instagram} target="_blank" rel="noopener noreferrer" className="social-button instagram">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> 
                          Instagram
                        </a>
                      )}
                      <button className="btn-primary btn-small" onClick={() => openPdf(artist.id)}>
                        <FileText size={16} /> Deck
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="card-shows">
                  <h4 className="shows-title"><Calendar size={18} /> Upcoming Shows</h4>
                  <div className="shows-table-container inline-shows">
                    {Object.entries(grouped).map(([monthYear, showsList]) => (
                      <div key={monthYear} className="month-group">
                        <h5>{monthYear}</h5>
                        <table className="shows-table">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>City</th>
                            </tr>
                          </thead>
                          <tbody>
                            {showsList.map((show, idx) => (
                              <tr key={idx}>
                                <td>{show.date}</td>
                                <td>{show.city}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                    {tba.length > 0 && (
                      <div className="month-group tba-group">
                        <h5>To Be Announced</h5>
                        <table className="shows-table">
                          <tbody>
                            {tba.map((show, idx) => (
                              <tr key={idx} className="tba-row">
                                <td colSpan="2">{show.original}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ArtistList;
