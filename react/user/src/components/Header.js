import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  // const handleSearchChange = async (e) => {
  //   const value = e.target.value;
  //   setSearchTerm(value);

  //   if (!value.trim()) {
  //     setSearchResults([]);
  //     setShowResults(false);
  //     return;
  //   }

  //   try {
  //     const token = localStorage.getItem("token");

  //     const response = await axios.get(
  //       `http://127.0.0.1:8000/userapi/searchmovie/?q=${value}`,
  //       {
  //         headers: {
  //           Authorization: `Token ${token}`,
  //         },
  //       }
  //     );

  //     setSearchResults(response.data);
  //     setShowResults(true);
  //   } catch (error) {
  //     console.error("Search Error:", error);
  //   }
  // };

  return (
    <header className="header">
      <div className="logo">StreamER</div>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/watchlater">WatchLater</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/history">History</Link>
      </nav>

      <div className="header-right">

        {/* Search */}
        <div
          style={{
            position: "relative",
          }}>

          {/* SEARCH BAR */}
          {/* <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => {
              if (searchResults.length > 0) {
                setShowResults(true);
              }
            }}/> */}
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchTerm.trim()) {
                navigate(`/search/${searchTerm}`);
              }
            }}/>  
        </div>

        {/* Account Menu */}
        <div className="profile-menu">
          <button
            className="account-btn"
        
            onClick={() =>{ setShowMenu(!showMenu);
              console.log("clicked");
            }}
          >
            Account ▼
          </button>

          {showMenu && (
            <div className="user-dropdown-menu">
              <button
                className="dropdown-item"
                onClick={() => navigate("/changepassword")}
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