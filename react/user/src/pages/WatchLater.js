import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function WatchLater() {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

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

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1 style={{ marginBottom: "40px" }}>
          Watch Later
        </h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : watchlist.length === 0 ? (
          <h2>No movies in watch Later List</h2>
        ) : (
          watchlist.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#161625",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <div>
                <h3>{item.movie.name}</h3>
                <p>{item.movie.description}</p>
              </div>

              <button
                onClick={() => deleteMovie(item.movie.id)}
                style={{
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default WatchLater;