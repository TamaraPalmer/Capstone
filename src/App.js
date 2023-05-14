import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import BrowseArtist from "./pages/Browser/BrowseArtist";
import ArtistProfile from "./pages/ArtistProfile/ArtistProfile";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<BrowseArtist />} />
        <Route path="/artist" element={<ArtistProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
//browse artist ,user dash board links between pages inside components,//
/// element would chnage to home  the playlist would be inside dashboard
// home,browse (artist,song componets imported)artist(song components),dashboard(user name , profile image,bio,embedd playlist) , aritst profile- song should only link to artist profile
// Scout profile dashbaord fake profile pic playlist