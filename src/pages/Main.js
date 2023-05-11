import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to our music platform</h1>
        <p>
          Discover new independent artists and submit your own music for
          consideration in our curated playlists.
        </p>
        <Link to="/user-dashboard">Explore Playlists</Link>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
