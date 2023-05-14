// header , main and footer//
import React from "react";
import Typography from "@mui/material/Typography";
import discoverUs from "../assets/images/DiscoverUs.png";

const Home = () => {
  return (
    <div className="home">
      <main className="home__content">
      <Typography>  Unleash Music's Hidden Gems with DiscoverUs    </Typography>
   <button className="header__button "> 
   Scout</button>
   <button className="header__button">
     Listen </button>

    
          <Typography>
           DiscoverUs is a platform
          that provides independent artists with the tools and support they need
          to break into the music industry and build a fan base. From scouting
          and discovering new talent to connecting with other artists and
          producers, Discover Unsigned is the ultimate destination for emerging
          artists.
        </Typography>
        
      </main>
    </div>
  );
};

export default Home;
