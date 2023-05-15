import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", p: 4 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Contact Us </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ mr: 1 }} color="inherit">
              <EmailIcon />
            </IconButton>
            <IconButton sx={{ mr: 1 }} color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ mr: 1 }} color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            &copy; {currentYear} DiscoverUs. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ ml: 2 }}>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by Fyiah
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Link to="/">
//         <div className="footer__image">
//           <img src={logo} alt="Brand-logo" className="footer__logo" />
//         </div>
//       </Link>
//       <ul className="footer__links">
//         <div className="sidebar__dropdown">
//           <ul className="sidebar__dropdown-list">
//             <li className="sidebar__dropdown-item">
//               <Link to="/artists" className="sidebar__dropdown-link">
//                 Artists
//               </Link>
//             </li>
//             <li className="sidebar__dropdown-item">
//               <Link to="/playlists" className="sidebar__dropdown-link">
//                 Playlists
//               </Link>
//             </li>
//             <li className="sidebar__dropdown-item">
//               <Link to="/my-playlists" className="sidebar__dropdown-link">
//                 My Playlists
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <li>
//           <Link to="/terms-of-service">Terms of Service</Link>
//         </li>
//         <li>
//           <Link to="/privacy-policy">Privacy Policy</Link>
//         </li>
//         <li>
//           <Link to="/about-us">About Us</Link>
//         </li>
//         <li>
//           <Link to="/about-us"> Artist Advice</Link>
//         </li>
//         <li>
//           <Link to="/contact-us">Contact Us</Link>
//         </li>
//       </ul>
//       <p className="footer__copyright">
//         © 2023 Music Platform. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
