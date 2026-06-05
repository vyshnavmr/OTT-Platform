import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>StreamX</h2>

      <p>
        The Future of Movie Streaming
      </p>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/">Movies</a>
        {/* <a href="/">Contact</a> */}
      </div>

      <p className="copyright">
        © 2026 StreamX. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;