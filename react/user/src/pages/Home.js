import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

  const watchLaterMovies = [
    "Interstellar",
    "Inception",
    "Avatar"
  ];

  const historyMovies = [
    "Batman",
    "Joker",
    "Oppenheimer"
  ];

  const movies = [
    "Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5",
    "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10",
    "Movie 11", "Movie 12", "Movie 13", "Movie 14", "Movie 15",
    "Movie 16", "Movie 17", "Movie 18", "Movie 19", "Movie 20"
  ];

  const [visibleMovies, setVisibleMovies] = useState(6);

  const pageStyle = {
    backgroundColor: "#0a0a15",
    color: "white",
    minHeight: "100vh"
  };

  const containerStyle = {
    padding: "30px"
  };

  const sectionTitle = {
    marginTop: "30px",
    marginBottom: "15px"
  };

  const rowStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  };

  const smallCard = {
    width: "220px",
    backgroundColor: "#161625",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer"
  };

  const thumbStyle = {
    width: "100%",
    height: "150px",
    backgroundColor: "#2b2b45"
  };

  const seeMoreStyle = {
    marginTop: "15px",
    marginBottom: "20px",
    color: "cyan",
    cursor: "pointer",
    fontWeight: "bold"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px"
  };

  const movieCard = {
    backgroundColor: "#161625",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer"
  };

  const movieImage = {
    width: "100%",
    height: "250px",
    backgroundColor: "#2b2b45"
  };

  const movieTitle = {
    padding: "15px",
    textAlign: "center"
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px"
  };

  const showMoreButton = {
    padding: "12px 25px",
    backgroundColor: "cyan",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div style={pageStyle}>

      <Header />

      <div style={containerStyle}>

        {/* WATCH LATER */}

        <h2 style={sectionTitle}>Watch Later</h2>

        <div style={rowStyle}>
          {watchLaterMovies.map((movie, index) => (
            <div key={index} style={smallCard}>
              <div style={thumbStyle}></div>

              <div style={{ padding: "10px" }}>
                <h4>{movie}</h4>
              </div>
            </div>
          ))}
        </div>

        <div style={seeMoreStyle}>
          See More →
        </div>

        {/* HISTORY */}

        <h2 style={sectionTitle}>History</h2>

        <div style={rowStyle}>
          {historyMovies.map((movie, index) => (
            <div key={index} style={smallCard}>
              <div style={thumbStyle}></div>

              <div style={{ padding: "10px" }}>
                <h4>{movie}</h4>
              </div>
            </div>
          ))}
        </div>

        <div style={seeMoreStyle}>
          See More →
        </div>

        {/* ALL MOVIES */}

        <h2 style={sectionTitle}>Available Movies</h2>

        <div style={gridStyle}>
          {movies.slice(0, visibleMovies).map((movie, index) => (
            <div key={index} style={movieCard}>
              <div style={movieImage}></div>

              <div style={movieTitle}>
                <h4>{movie}</h4>
              </div>
            </div>
          ))}
        </div>

        {visibleMovies < movies.length && (
          <div style={buttonContainer}>
            <button
              style={showMoreButton}
              onClick={() => setVisibleMovies(visibleMovies + 6)}
            >
              Show More ▼
            </button>
          </div>
        )}

      </div>

      <Footer />

    </div>
  );
}

export default Home;