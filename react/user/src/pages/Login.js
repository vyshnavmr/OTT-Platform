function Login() {

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

        <h1>Login</h1>

        <form>

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

          <button style={buttonStyle}>
            Login
          </button>

        </form>

        <p style={{ marginTop: "15px", cursor: "pointer" }}>
          Don't have an account?
        </p>

      </div>

    </div>
  );
}

export default Login;