import { Link } from "react-router-dom";

const Nav = () => (
  <header className="header">
    <div className="header__logo">
      <Link to="/">
        <img
          src="https://via.placeholder.com/150x50"
          alt="TempoArt Logo"
          className="header__logo-img"
        />
      </Link>
    </div>
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        <li>
          <Link to="/" className="header__navigation-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/artists" className="header__navigation-link">
            Artists
          </Link>
        </li>
        <li>
          <Link to="/playlists" className="header__navigation-link">
            Playlists
          </Link>
        </li>
        <li>
          <Link to="/playlist-creation" className="header__navigation-link">
            MyPlaylist
          </Link>
        </li>
      </ul>
    </nav>
    <div className="header__upload">
      <Link to="/submit-music" className="header__button button">
        <img
          src="https://via.placeholder.com/20x20"
          alt="Upload Icon"
          className="header__upload-icon"
        />
        Upload Music
      </Link>
      <img
        src="https://via.placeholder.com/40x40"
        alt="Profile Picture"
        className="header__profile-picture"
      />
    </div>
  </header>
);

export default Nav;
