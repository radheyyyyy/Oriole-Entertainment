import React from 'react';
import { FileText, CalendarDays, ExternalLink, MapPin, Star } from 'lucide-react';

const BIG_LINEUP_DECK = 'https://drive.google.com/file/d/1voZwL3hYgWRpLOCMM9o3DnZiROuhaNmt/view?usp=sharing';

const EventList = () => {
  const events = [
    { 
      id: "FY '26-27 Tours_compressed.pdf", 
      name: "Financial Year 2026-27 Plans", 
      description: "Our comprehensive touring plans and strategy for the upcoming financial year.",
      type: "Tour Plan"
    },
    { 
      id: "Talkatora Shows Deck_compressed.pdf", 
      name: "Talkatora Shows", 
      description: "Details and sponsorship opportunities for our upcoming mega shows at Talkatora Stadium.",
      type: "Venue Deck"
    }
  ];

  const openPdf = (filename) => {
    window.open(`/pdfs/${encodeURIComponent(filename)}`, '_blank');
  };

  return (
    <section className="events-section">
      <h2>Special Events &amp; Tours</h2>

      {/* ── THE BIG LINEUP'2027 ─────────────────────────────────── */}
      <div className="big-lineup-card">
        <div className="big-lineup-badge">
          <Star size={14} fill="currentColor" /> FLAGSHIP SHOW
        </div>
        <div className="big-lineup-header">
          <div className="big-lineup-title-wrap">
            <h3 className="big-lineup-title">THE BIG LINEUP&apos;2027</h3>
            <p className="big-lineup-tagline">India's biggest multi-act live entertainment spectacle</p>
          </div>
          <button
            className="btn-lineup-deck"
            onClick={() => window.open(BIG_LINEUP_DECK, '_blank')}
          >
            <ExternalLink size={16} /> View Deck
          </button>
        </div>

        <div className="big-lineup-show-info">
          <div className="big-lineup-show-row">
            <CalendarDays size={20} className="big-lineup-icon" />
            <div>
              <span className="big-lineup-label">Upcoming Show</span>
              <span className="big-lineup-value">01 August 2027</span>
            </div>
          </div>
          <div className="big-lineup-show-row">
            <MapPin size={20} className="big-lineup-icon" />
            <div>
              <span className="big-lineup-label">Venue</span>
              <span className="big-lineup-value">KD Jadhav Stadium, Delhi</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Standard event cards ─────────────────────────────────── */}
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card" onClick={() => openPdf(event.id)}>
            <div className="event-icon">
              <CalendarDays size={40} color="var(--accent)" />
            </div>
            <h3>{event.name}</h3>
            <p className="event-type">{event.type}</p>
            <p>{event.description}</p>
            <button className="btn-secondary">
              <FileText size={16} /> View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;
