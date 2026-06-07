import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        StreamX
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Movies</a>
        <a href="/">Watchlist</a>
        <a href="/">History</a>
        <a href="/">Profile</a>
      </nav>

      <button className="login-btn">
        Logout
      </button>
    </header>
  );
}

export default Header;