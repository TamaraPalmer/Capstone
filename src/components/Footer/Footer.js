import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import "./Footer.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '40px',
    '& .contact-us': {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '40px'
    },
    '& .social-icons': {
      display: 'flex',
      alignItems: 'center',
      '& .MuiIconButton-root': {
        marginRight: '16px'
      }
    },
    '& .rights-reserved': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '40px',
      fontSize: '14px',
      '& .made-with-love': {
        marginLeft: '16px'
      }
    }
  }
}));

function Footer() {
  const currentYear = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" className="contact-us">Contact Us</Typography>
        <Box className="social-icons">
          <IconButton color="inherit">
            <EmailIcon />
          </IconButton>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box className="rights-reserved">
          <Typography variant="body2">
            &copy; {currentYear} DiscoverUs. All Rights Reserved.
          </Typography>
          <Typography variant="body2" className="made-with-love">
            Made with <span role="img" aria-label="heart">❤️</span> by John Doe
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
