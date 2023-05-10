import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function ArtistDashboard() {
  return (
    <div>
      <Header />
      <main>
        <h1>Artist Dashboard</h1>
        {/* Here you can add the artist's uploaded songs, their profile details, and other artist-related details */}
      </main>
      <Footer />
    </div>
  );
}

export default ArtistDashboard;
