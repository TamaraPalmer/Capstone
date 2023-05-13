import React, { useState, useEffect } from "react";
import "./ArtistProfile.scss";
import axios from "axios";

const ArtistProfile = ({ artistId }) => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO?si=7dbcfaa9160c4816
        artists/${artistId}`
      );
      setArtist(result.data);
    };
    fetchData();
  }, [artistId]);

  if (!artist) {
    return <div>Loading...</div>;
  }

  const { name, bio, contact, albums } = artist;

  return (
    <div className="artist-profile">
      <img src={artist.images[0].url} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Contact</h3>
      <ul>{contact && contact.map((c, index) => <li key={index}>{c}</li>)}</ul>
      <h3>Songs</h3>
      <ul>
        {albums.map((album, index) =>
          album.tracks.map((track, index) => (
            <li key={index}>
              <span>{track.name}</span>
              <button>Play</button>
              <button>Add to Playlist</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ArtistProfile;
