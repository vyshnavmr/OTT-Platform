import Header from "../components/Header";

function Movies() {
  const movies = [
    "Interstellar",
    "Inception",
    "Avatar",
    "Oppenheimer",
    "Joker",
    "Batman",
    "Titanic",
    "The Dark Knight",
    "Avengers: Endgame",
    "Spider-Man: No Way Home"
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#0a0a14",
      padding: "40px",
      color: "white",
    },
    heading: {
      color: "cyan",
      textShadow: "0 0 10px cyan",
      marginBottom: "30px",
    },
    movieGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "25px",
    },
    movieCard: {
      backgroundColor: "#141428",
      border: "1px solid rgba(0,255,255,0.2)",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      cursor: "pointer",
      transition: "0.3s",
    },
    movieTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    moviePoster: {
      width: "100%",
      height: "250px",
      borderRadius: "8px",
      objectFit: "cover",
      marginBottom: "15px",
      backgroundColor: "#222",
    },
  };

  return (
    <>
      <Header />

      <div style={styles.container}>
        <h1 style={styles.heading}>All Movies</h1>

        <div style={styles.movieGrid}>
          {movies.map((movie, index) => (
            <div key={index} style={styles.movieCard}>
              <div style={styles.moviePoster}></div>
              <div style={styles.movieTitle}>{movie}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;