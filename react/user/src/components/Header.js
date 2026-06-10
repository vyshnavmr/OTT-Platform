import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      navigate("/login");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);

      // Example:
      // navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <header className="header">
      <div className="logo">StreamER</div>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/watchlater">Watchlist</Link>
        <Link to="/movies">Movies</Link>
        {/* <Link to="/">Others</Link> */}
      </nav>

      <div className="header-right">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="profile-menu">
          <button
            className="account-btn"
            onClick={() => setShowMenu(!showMenu)}
          >
            Account 🡓
          </button>

          {showMenu && (
            <div className="dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => navigate("/change-password")}
              >
                Change Password
              </button>

              <button
                className="dropdown-item logout-item"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;