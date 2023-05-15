import * as React from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BrowseArtist from "../components/BrowseArtist/BrowseArtist";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/SvgIcon";

const theme = createTheme();

export default function Album() {
  const [artists, setArtists] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://v1.nocodeapi.com/fyiah876/spotify/fHCqbcjtNZRlBCZl/playlists?id=5HlbFuuO9gZ3Y4coHUtsSO&si=7dbcfaa9160c4816"
      );
      const mappedData = result.data.items.map((item) => ({
        id: item.id,
        name: item.name,
        images: item.images,
        followers: item.followers,
      }));
      setArtists(mappedData.slice(0, 6));
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Avatar alt="Sarah Tee" src="/static/images/avatar/2.jpg" />
      <Typography component="h1" variant="h5">
        User name
        Join DiscoverUs to connect with your favorite tracks, playlists and albums from Unsigned artist
      </Typography>
      <Typography component="h2" variant="subtitle1">
          Hi, I'm Sarah, a producer and scout for a major record label. I'm looking for innovative artists who want to push boundaries and make an impact in the industry. Let's work together to create something truly special and take your music to the next level.
        </Typography>
      <BrowseArtist />
    </ThemeProvider>
  );
}
