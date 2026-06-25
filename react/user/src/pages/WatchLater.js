import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WatchLater() {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://127.0.0.1:8000/userapi/watchlist/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log(response.data); // Debug

      setWatchlist(response.data);
    } catch (error) {
      console.error("Error fetching watchlist:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMovie = async (movieId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://127.0.0.1:8000/userapi/watchlist/delete/${movieId}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setWatchlist((prev) =>
        prev.filter((item) => item.movie.id !== movieId)
      );
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0a0a15",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Header />

      <div style={{ padding: "30px" }}>
        <h1 style={{ marginBottom: "40px" }}>Watch Later</h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : watchlist.length === 0 ? (
          <h2>No movies in Watch Later List</h2>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "25px",
            }}
          >
            {watchlist.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/moviedetails/${item.movie.id}`)}
                style={{
                  position: "relative",
                  backgroundColor: "#141428",
                  border: "1px solid rgba(0,255,255,0.2)",
                  borderRadius: "12px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                {/* Delete Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteMovie(item.movie.id);
                  }}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(255, 68, 68, 0.15)",
                    color: "#ff5c5c",
                    fontSize: "22px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  ×
                </button>

                {/* Movie Poster */}
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    backgroundColor: "#2b2b45",
                    borderRadius: "8px",
                    overflow: "hidden",
                    marginBottom: "15px",
                  }}
                >
                  {item.movie.thumbnail ? (
                    <img
                      src={`http://127.0.0.1:8000${item.movie.thumbnail}`}
                      alt={item.movie.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#2b2b45",
                      }}
                    />
                  )}
                </div>

                <h3>{item.movie.name}</h3>

                <p
                  style={{
                    color: "#aaa",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {item.movie.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default WatchLater;