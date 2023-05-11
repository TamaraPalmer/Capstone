import React, { useState } from "react";
import logo from "../../assets/images/DiscoverUs.png";
import profilePicture from "../../assets/images/profileIcon.png";
import uploadSVG from "../../assets/icons/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="header__image">
          <img src={logo} alt="Brand-logo" className="header__logo" />
        </div>
      </Link>
      <form className="header__form">
        <input type="search" placeholder="Search" className="header__search" />
      </form>
      <div className="header__upload">
        <Link to="/upload" className="header__button button">
          <img
            src={uploadSVG}
            alt="upload-icon"
            className="header__upload-icon"
          />
          UPLOAD
        </Link>
        <img
          src={profilePicture}
          alt="Profile-Picture"
          className="header__profile-picture"
        />
      </div>
      <button className="sidebar__button" onClick={handleSidebarToggle}>
        Menu
      </button>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar__dropdown">
          <ul className="sidebar__dropdown-list">
            <li className="sidebar__dropdown-item">
              <Link to="/" className="sidebar__dropdown-link">
                Home
              </Link>
            </li>
            <li className="sidebar__dropdown-item">
              <Link to="/artists" className="sidebar__dropdown-link">
                Artists
              </Link>
            </li>
            <li className="sidebar__dropdown-item">
              <Link to="/playlists" className="sidebar__dropdown-link">
                Playlists
              </Link>
            </li>
            <li className="sidebar__dropdown-item">
              <Link to="/my-playlists" className="sidebar__dropdown-link">
                My Playlists
              </Link>
            </li>
          </ul>
        </div>
        <ul className="sidebar__list-container">
          <li className="sidebar__item">
            <Link to="/login" className="sidebar__link">
              Login
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/register" className="sidebar__link">
              Register
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/logout" className="sidebar__link">
              Logout
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
