import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [passwordConf, setPasswordConf] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate();

    function registerUser(){
        console.log("Button clicked");
        var user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf
        }
        axios.post('http://127.0.0.1:8000/userapi/signup/',user).then(response=>{
            setErrorMessage('');
            navigate('/login');
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            }else{
                setErrorMessage('Failed to connect to api');
            }
        })
    }
  return (
    <div style={containerStyle}>

      <div style={boxStyle}>

        <h1>Signup</h1>
        {errorMessage?<div className="alert alert-danger">{errorMessage}</div>:''}
        <form>

          <input
            type="text"
            placeholder="Enter Username"
            style={inputStyle}
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

          <input
            type="email"
            placeholder="Enter Email"
            style={inputStyle}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={inputStyle}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
            value={passwordConf}
            onChange={(e)=>setPasswordConf(e.target.value)}
          />

          <button type="button" style={buttonStyle}
            onClick={registerUser}>
            Signup
        </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;