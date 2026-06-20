import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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

  function loginUser() {

    const user = {
      email: email,
      password: password
    };

    console.log("Posting to:", "http://127.0.0.1:8000/userapi/login/");
    axios.post("http://127.0.0.1:8000/userapi/login/",user)
    .then(response => {
      console.log("Login Success", response.data);
      console.log(response.data);

      // Optional: store token if your API returns one
      localStorage.setItem("token", response.data.token);

      navigate("/home");
    })
    .catch(error => {
      console.log(error);

      setErrorMessage("Invalid email or password");
    });
  }

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>

        <h1>Login</h1>

        {errorMessage && (
          <div style={{ color: "red" }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()}>

          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            style={buttonStyle}
            onClick={loginUser}
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;