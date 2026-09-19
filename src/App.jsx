import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ArtistList from './components/ArtistList';
import EventList from './components/EventList';
import Footer from './components/Footer';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="app-container">
      <main>
        <Hero />
        <AboutUs />
        <ArtistList />
        <EventList />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
