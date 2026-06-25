import { useLocation } from "react-router-dom";

function VideoPlayer() {
  const location = useLocation();

  const videoUrl = location.state?.video;

  if (!videoUrl) {
    return (
      <div
        style={{
          background: "#000",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>No video found.</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        controls
        autoPlay
        width="1000"
        style={{
          maxWidth: "100%",
          maxHeight: "100vh",
        }}
      >
        <source
          src={`http://127.0.0.1:8000${videoUrl}`}
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default VideoPlayer;