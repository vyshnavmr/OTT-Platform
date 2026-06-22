import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function SearchMovie() {
  const { query } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, [query]);

  const fetchMovies = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://127.0.0.1:8000/userapi/movie/search/?q=${query}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a15",
        color: "white",
      }}>
      <Header />
      
      <div 
      style={{
        padding: "40px",
        }}>
        <h1>Search Results for "{query}"</h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : movies.length === 0 ? (
          <h2>No movies found</h2>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                style={{
                  background: "#141428",
                  padding: "20px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  border: "1px solid rgba(0,255,255,0.2)",
                }}
                onClick={() =>
                  navigate(`/moviedetails/${movie.id}`)
                }
              >
                <h3>{movie.name}</h3>

                {movie.genre && (
                  <p style={{ color: "#aaa" }}>
                    Genre: {movie.genre}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default SearchMovie;