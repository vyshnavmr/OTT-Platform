import Header from "../components/Header";
import Footer from "../components/Footer";

function MovieDetails() {

  const pageStyle = {
    backgroundColor: "#0a0a15",
    color: "white",
    minHeight: "100vh"
  };

  const containerStyle = {
    padding: "40px"
  };

  const movieSection = {
    display: "flex",
    gap: "40px",
    marginTop: "30px",
    flexWrap: "wrap"
  };

  const thumbnailStyle = {
    width: "350px",
    height: "500px",
    backgroundColor: "#2b2b45",
    borderRadius: "10px"
  };

  const detailsStyle = {
    flex: 1
  };

  const descriptionStyle = {
    marginTop: "20px",
    lineHeight: "1.8"
  };

  const buttonContainer = {
    marginTop: "30px",
    display: "flex",
    gap: "20px"
  };

  const watchLaterButton = {
    padding: "12px 20px",
    backgroundColor: "#252540",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const playButton = {
    padding: "12px 20px",
    backgroundColor: "cyan",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div style={pageStyle}>

      <Header />

      <div style={containerStyle}>

        <div style={movieSection}>

          <div style={thumbnailStyle}></div>

          <div style={detailsStyle}>

            <h1>Interstellar</h1>

            <p style={descriptionStyle}>
              Interstellar is a science fiction movie that follows
              a group of astronauts travelling through a wormhole
              in search of a new home for humanity as Earth faces
              environmental collapse.
            </p>

            <div style={buttonContainer}>

              <button style={playButton}>
                Play Now
              </button>
              
              <button style={watchLaterButton}>
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
