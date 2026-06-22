import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [history, setHistory] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(6);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const config = {
      headers: {Authorization: `Token ${token}`}
    };

    // Watchlist
    axios.get("http://127.0.0.1:8000/userapi/watchlist/",config)
    .then(response => {setWatchList(response.data);})
    .catch(error => {console.log(error);});

    // History
    axios.get(
      "http://127.0.0.1:8000/userapi/watchhistory/",config)
    .then(response => {setHistory(response.data);})
    .catch(error => {console.log(error);});

    // All Movies
    axios.get("http://127.0.0.1:8000/userapi/listmovie/",config)
    .then(response => {setMovies(response.data);})
    .catch(error => {console.log(error);});

  }, [navigate]);

  const pageStyle = {
    backgroundColor: "#0a0a15",
    color: "white",
    minHeight: "100vh"
  };

  const containerStyle = {
    padding: "30px"
  };

  const sectionTitle = {
    marginTop: "20px",
    marginBottom: "35px"
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px"
  };

  const movieCard = {
    backgroundColor: "#161625",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer"
  };

  const movieTitle = {
    padding: "15px"
  };

  const seeMoreStyle = {
    color: "cyan",
    cursor: "pointer",
    marginTop: "15px",
    fontWeight: "bold"
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
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <Header />

      <div style={containerStyle}>

        {/* WATCH LIST */}
        <h2 style={sectionTitle}>Watch Later</h2>
        <div style={rowStyle}>
          {watchList.slice(0, 3).map((item) => (
            <div key={item.id} style={movieCard}
            onClick={() => navigate(`/moviedetails/${item.movie.id}`)}>
              <img
                src={`http://127.0.0.1:8000${item.movie.thumbnail}`}
                alt={item.movie.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"}}/>
              <div style={movieTitle}>
                <h4>{item.movie.name}</h4>
              </div>
            </div>))}
        </div>

        <div
          style={seeMoreStyle}
          onClick={() => navigate("/watchlater")}>
          See More →
        </div>

        {/* HISTORY */}
        <h2 style={sectionTitle}>History</h2>

        <div style={rowStyle}>
          {history.slice(0, 3).map((item) => (
            <div key={item.id} style={movieCard}
            onClick={() => navigate(`/moviedetails/${item.movie.id}`)}>
              <img
                src={`http://127.0.0.1:8000${item.movie.thumbnail}`}
                alt={item.movie.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}/>

              <div style={movieTitle}>
                <h4>{item.movie.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div
          style={seeMoreStyle}
          onClick={() => navigate("/history")}>
          See More →
        </div>

        {/* AVAILABLE MOVIES */}
        <h2 style={sectionTitle}>Available Movies</h2>

        <div style={rowStyle}>
          {movies.slice(0, visibleMovies).map((movie) => (

            <div key={movie.id} style={movieCard}
            onClick={() => navigate(`/moviedetails/${movie.id}`)}>

              <img
                src={`http://127.0.0.1:8000${movie.thumbnail}`}
                alt={movie.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}/>

              <div style={movieTitle}>
                <h4>{movie.name}</h4>

                <p style={{
                    color: "#ccc",
                    fontSize: "14px"
                  }}>
                  {movie.description}
                </p>
                <p>
                  Views: {movie.views}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleMovies < movies.length && (

          <div style={buttonContainer}>
            <button
              style={showMoreButton}
              onClick={() =>
                setVisibleMovies(
                  visibleMovies + 6)}>

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