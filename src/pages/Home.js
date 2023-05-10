
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/artist-submission-form">Submit Music</Link></li>
            <li><Link to="/artist-dashboard">Artist Dashboard</Link></li>
            <li><Link to="/user-dashboard">User Dashboard</Link></li>
            <li><Link to="/educational-resources">Educational Resources</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to our music platform</h1>
        <p>Discover new independent artists and submit your own music for consideration in our curated playlists.</p>
        <Link to="/user-dashboard">Explore Playlists</Link>
      </main>
      <Footer />
    </div>
  );
};

export default Home;


