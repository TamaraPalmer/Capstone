import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/DiscoverUs.png";

const pages = ["Home", "Browse", "Dashboard"];
const settings = ["Artist", "Login", "SignUp", "Submit"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <div className="header__image">
              <img src={logo} alt="Brand logo" className="header__logo-img" />
            </div>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
// const Header = () => (
//   <header className="header">
//     <Link to="/">
//       <div className="header__image">
//         <img src={logo} alt="Brand logo" className="header__logo" />
//       </div>
//     </Link>
//     <form className="header__form">
//       <input type="search" placeholder="Search" className="header__search" />
//     </form>
//     <div className="header__upload">
//       <Link to="/upload" className="header__button button">
//         <img
//           src={uploadSVG}
//           alt="Upload icon"
//           className="header__upload-icon"
//         />
//         UPLOAD
//       </Link>
//       <img
//         src={profilePicture}
//         alt="Profile picture"
//         className="header__profile-picture"
//       />
//     </div>
//     <nav className="navigation">
//       <ul className="navigation__list">
//         <li className="navigation__item">
//           <Link to="/" className="navigation__link">
//             Home
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link to="/artists-profile" className="navigation__link">
//             Artists
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link to="/playlists" className="navigation__link">
//             Playlists
//           </Link>
//         </li>
//         <li className="navigation__item">
//           <Link to="/my-playlists" className="navigation__link">
//             My Playlists
//           </Link>
//         </li>
//       </ul>
//     </nav>
//     <aside className="sidebar">
//       <ul className="sidebar__list">
//         <li className="sidebar__item">
//           <Link to="/login" className="sidebar__link">
//             Login
//           </Link>
//         </li>
//         <li className="sidebar__item">
//           <Link to="/register" className="sidebar__link">
//             Register
//           </Link>
//         </li>
//         <li className="sidebar__item">
//           <Link to="/logout" className="sidebar__link">
//             Logout
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   </header>
// );

// export default Header;
