import axios from "axios";
import { useState, useEffect } from "react";
import "./Playlist.scss";

function Playlist() {
  const [playlist, setPlaylist] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO?si=4d1fb5d54b414281"
      )
      .then((response) => {
        setPlaylist(response.data);
      });
  }, []);

  useEffect(() => {
    if (playlist && playlist.tracks && playlist.tracks.items.length > 0) {
      setSelectedTrack(getRandomTrack(playlist.tracks.items));
    }
  }, [playlist]);

  function getRandomTrack(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex].track;

    return {
      id: item.id,
      name: item.name,
      artist: item.artists[0].name,
      preview: item.preview_url,
      image: item.album.images[0].url,
    };
  }

  function handleRemoveSong(id) {
    setPlaylist((prevPlaylist) => {
      const newTracks = prevPlaylist.tracks.items.filter(
        (item) => item.track.id !== id
      );
      return {
        ...prevPlaylist,
        tracks: {
          ...prevPlaylist.tracks,
          items: newTracks,
        },
      };
    });
  }

  const defaultPreview = selectedTrack ? selectedTrack.preview : null;
  const defaultArtist = selectedTrack ? selectedTrack.artist : null;
  const defaultName = selectedTrack ? selectedTrack.name : null;
  const defaultImage = selectedTrack ? selectedTrack.image : null;

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    let timerId = null;
    if (audioPlayer) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
      timerId = setTimeout(() => {
        audioPlayer.pause();
        setSelectedTrack(getRandomTrack(playlist.tracks.items));
      }, 5000);
    }
    return () => clearTimeout(timerId);
  }, [defaultPreview, playlist]);

  return (
    <div className="playlist">
      <h1 className="playlist-title">{playlist && playlist.name}</h1>
      <audio id="audioPlayer" src={defaultPreview} preload="auto"></audio>
      <button
        className="playlist-button"
        onClick={() => setSelectedTrack(getRandomTrack(playlist.tracks.items))}
      >
        REVEAL
      </button>
      <div className="song-details">
        <h2 className="song-title">{defaultName}</h2>
        <p className="song-artist">Artist: {defaultArtist}</p>
      </div>
      <ul className="song-list">
        {playlist &&
          playlist.tracks &&
          playlist.tracks.items.map((item) => (
            <li key={item.track.id}>
              <img
                src={item.track.album.images[0].url}
                alt={item.track.album.name}
              />
              <div className="song-info">
                <h3 className="song-name">{item.track.name}</h3>
                <p className="song-artist">
                  Artist: {item.track.artists[0].name}
                </p>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveSong(item.track.id)}
              >
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Playlist;
