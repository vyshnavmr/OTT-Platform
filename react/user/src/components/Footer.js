import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>StreamER</h2>

      <p>
        The Future of Movie Streaming
      </p>

      <div className="footer-links">
        <a href="/home">Home</a>
        <a href="/movies">Movies</a>
        <a href="/history">History</a>
        {/* <a href="/">Contact</a> */}
      </div>

      <p className="copyright">
        © 2026 StreamX. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;