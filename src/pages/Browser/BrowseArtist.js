import axios from "axios";
import { useState, useEffect } from "react";
import "./BrowseArtist.scss";

function BrowseArtist() {
  const [music, setMusic] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO?si=7dbcfaa9160c4816"
      )
      .then((response) => {
        const tracks = response.data.tracks.items.map((item) => {
          const track = item.track;
          return {
            name: track.name,
            artist: track.artists[0].name, // assuming there is only one artist per track
            preview: track.preview_url,
          };
        });
        setMusic(tracks);
      });
  }, []);

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer && music.length > 0) {
      audioPlayer.src = music[currentIndex].preview;
      audioPlayer.play();
    }
  }, [music, currentIndex]);

  function handleSongEnd() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % music.length);
  }

  const currentTrack = music[currentIndex];

  return (
    <div className="container">
      <audio id="audioPlayer" onEnded={handleSongEnd} preload="auto"></audio>
      <div>
        <h1 className="song-title">{currentTrack?.name}</h1>
        <p className="artist">Artist: {currentTrack?.artist}</p>
      </div>
    </div>
  );
}

export default BrowseArtist;

//Scout// link to artist section 
//Listen// trending song  use an id 
// top half artist  // top tranding songs 