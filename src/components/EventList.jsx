import React from 'react';
import { FileText, CalendarDays } from 'lucide-react';

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
      <h2>Special Events & Tours</h2>
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
