import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import discoverUs from "../assets/images/DiscoverUs.png";
import BrowseArtist from "../components/BrowseArtist/BrowseArtist";

const Home = () => {
  return (
    <div className="home">
      <main className="home__content">
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "red", mb: 2 }}
        >
          Unleash Music's Hidden Gems with DiscoverUs
        </Typography>
        <Typography variant="h7" component="p">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Scout, Play, and Make more Music!
          </Typography>
          <Link to="/browse">
            <button
              className="header__button"
             
            >
              Scout
            </button>
          </Link>
        </Typography>
        <BrowseArtist />
      </main>
    </div>
  );
};

export default Home;
