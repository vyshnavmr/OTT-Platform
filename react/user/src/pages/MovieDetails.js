import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {fetchMovie();}, [id]);
  
  const fetchMovie = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://127.0.0.1:8000/userapi/movie/details/${id}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setMovie(response.data);
    } catch (error) {console.error("Error fetching movie:", error);}
  };

  const addToWatchLater = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://127.0.0.1:8000/userapi/watchlist/add/${id}/`,
        {},
        {headers: {Authorization: `Token ${token}`,},}
      );

      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to add movie");
    }
  };

  const playMovie = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(`http://127.0.0.1:8000/userapi/movie/watch/${id}/`,{},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(movie.video);
      console.log(movie);
      navigate("/videoplayer", {
        state: {
          video: movie.video,
        },
      });

    } catch (error) {
      console.error(error);
    }
  };

  const pageStyle = {
    backgroundColor: "#0a0a15",
    color: "white",
    minHeight: "100vh",
  };

  const containerStyle = {
    padding: "40px",
  };

  const movieSection = {
    display: "flex",
    gap: "40px",
    marginTop: "30px",
    flexWrap: "wrap",
  };

  const thumbnailStyle = {
    width: "350px",
    height: "500px",
    backgroundColor: "#2b2b45",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const detailsStyle = {
    flex: 1,
  };

  const descriptionStyle = {
    marginTop: "20px",
    lineHeight: "1.8",
  };

  const buttonContainer = {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
  };

  const watchLaterButton = {
    padding: "12px 20px",
    backgroundColor: "#252540",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const playButton = {
    padding: "12px 20px",
    backgroundColor: "cyan",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  if (!movie) {
    return (
      <div style={pageStyle}>
        <Header />
        <div style={{ padding: "40px" }}>
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <Header />

      <div style={containerStyle}>
        <div style={movieSection}>

          {movie.image ? (
            <img
              src={movie.image}
              alt={movie.name}
              style={thumbnailStyle}
            />
          ) : (
            <div style={thumbnailStyle}></div>
          )}

          <div style={detailsStyle}>
            <h1>{movie.name}</h1>

            <p style={descriptionStyle}>
              {movie.description}
            </p>

            <div style={buttonContainer}>
              <button style={playButton}
                onClick={playMovie}>
                Play Now
              </button>

              <button
                style={watchLaterButton}
                onClick={addToWatchLater}
              >
                Add to Watch Later
              </button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MovieDetails;