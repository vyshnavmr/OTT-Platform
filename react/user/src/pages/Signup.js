function Signup() {

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a15"
  };

  const boxStyle = {
    width: "350px",
    padding: "30px",
    backgroundColor: "#111122",
    borderRadius: "10px",
    textAlign: "center",
    color: "white"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "none",
    outline: "none"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    backgroundColor: "cyan",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyle}>

      <div style={boxStyle}>

        <h1>Signup</h1>

        <form>

          <input
            type="text"
            placeholder="Enter Username"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
          />

          <button style={buttonStyle}>
            Signup
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;