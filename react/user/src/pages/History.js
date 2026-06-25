import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://127.0.0.1:8000/userapi/watchhistory/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setHistory(response.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  const pageStyle = {
    backgroundColor: "#0a0a15",
    minHeight: "100vh",
    color: "white",
  };

  const containerStyle = {
    padding: "30px",
  };

  const listItemStyle = {
    display: "flex",
    gap: "20px",
    backgroundColor: "#161625",
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "10px",
    alignItems: "center",
  };

  const thumbnailStyle = {
    width: "120px",
    height: "80px",
    backgroundColor: "#2b2b45",
    borderRadius: "8px",
  };

  return (
    <div style={pageStyle}>
      <Header />

      <div style={containerStyle}>
        <h1 style={{ marginBottom: "40px" }}>
          Watch History
        </h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : history.length === 0 ? (
          <h2>No history found</h2>
        ) : (
          history.map((item) => (
            <div key={item.id} style={listItemStyle}>

              <div style={thumbnailStyle}>
                {item.movie.thumbnail && (
                  <img
                    src={`http://127.0.0.1:8000${item.movie.thumbnail}`}
                    alt={item.movie.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    onError={(e) => {
                      console.log("Thumbnail failed:", e.target.src);
                    }}
                  />
                )}
              </div>

              <div>
                <h3>{item.movie.name}</h3>

                <p>
                  {item.movie.description}
                </p>

                <small
                  style={{
                    color: "#999",
                  }}
                >
                  Watched:
                  {" "}
                  {new Date(item.watched_at).toLocaleString("en-GB")}
                </small>
              </div>

            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

export default History;