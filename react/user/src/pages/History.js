import Header from "../components/Header";
import Footer from "../components/Footer";

function History() {

  const HistoryMovies = [
    {
      id: 1,
      title: "Interstellar",
      description: "A journey beyond the stars."
    },
    {
      id: 2,
      title: "Inception",
      description: "Dream within a dream."
    },
    {
      id: 3,
      title: "Avatar",
      description: "Pandora awaits."
    },
    {
      id: 4,
      title: "Joker",
      description: "Origin story of Joker."
    },
  ];

  const pageStyle = {
    backgroundColor: "#0a0a15",
    minHeight: "100vh",
    color: "white"
  };

  const containerStyle = {
    padding: "30px"
  };

  const listItemStyle = {
    display: "flex",
    gap: "20px",
    backgroundColor: "#161625",
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "10px",
    alignItems: "center"
  };

  const thumbnailStyle = {
    width: "120px",
    height: "80px",
    backgroundColor: "#2b2b45",
    borderRadius: "8px"
  };

  return (
    <div style={pageStyle}>

      <Header />

      <div style={containerStyle}>

        <h1 style={{marginBottom: "40px"}}>History</h1>

        {HistoryMovies.map((movie) => (
          <div key={movie.id} style={listItemStyle}>

            <div style={thumbnailStyle}></div>

            <div>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>

          </div>
        ))}

      </div>

      <Footer />

    </div>
  );
}

export default History;