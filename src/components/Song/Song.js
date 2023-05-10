import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Song() {
  return (
    <div>
      <Header />
      <main>
        <h1>Song Title</h1>
        <p>Description of the song and the artist.</p>
        {/* Here you can add the audio player and other song details */}
      </main>
      <Footer />
    </div>
  );
}

export default Song;
