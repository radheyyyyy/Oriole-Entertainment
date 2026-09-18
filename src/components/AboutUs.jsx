import React from 'react';
import { Mic2, Building2, Ticket, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text-column">
          <h2><span className="text-accent">ABOUT</span> US</h2>
          <p>
            Oriole Entertainment Pvt Ltd has been a trailblazer in bringing comedy shows to Tier 2 and Tier 3 cities since 2017. As the home of renowned comedians like Anubhav Singh Bassi and Harsh Gujral, we have been dedicated to spreading laughter across cities such as Agra, Gurugram, Lucknow, Kanpur, Dehradun, and many more. 
          </p>
          <p>
            Founded by Ankur Bhargava, our mission is to continue making people laugh for years to come. With over 10,000+ shows produced pan-India and across international stages, the company dominates 130+ cities nationwide, producing solo specials, multi-lineup shows, and large-scale comedy festivals that continue to redefine the live entertainment landscape.
          </p>
        </div>
        
        <div className="about-stats-column">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Mic2 size={24} />
            </div>
            <h3>75+</h3>
            <p>Artists in collaboration during our journey</p>
          </div>
          
          <div className="stat-card stat-card-offset">
            <div className="stat-icon-wrapper">
              <Building2 size={24} />
            </div>
            <h3>130+</h3>
            <p>Cities covered nationwide</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <Ticket size={24} />
            </div>
            <h3>1,000,000+</h3>
            <p>Tickets sold and counting</p>
          </div>
          
          <div className="stat-card stat-card-offset">
            <div className="stat-icon-wrapper">
              <Sparkles size={24} />
            </div>
            <h3>10,000+</h3>
            <p>Shows brought to life across cities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
