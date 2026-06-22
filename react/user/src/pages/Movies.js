import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://127.0.0.1:8000/userapi/listmovie/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#0a0a14",
      padding: "30px",
      color: "white",
    },
    heading:{
      marginBottom: "40px"
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
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={styles.movieCard}
              onClick={() =>
                navigate(`/moviedetails/${movie.id}`)
              }
            >
              {movie.image ? (
                <img
                  src={movie.image}
                  alt={movie.name}
                  style={styles.moviePoster}
                />
              ) : (
                <div style={styles.moviePoster}></div>
              )}

              <div style={styles.movieTitle}>
                {movie.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;