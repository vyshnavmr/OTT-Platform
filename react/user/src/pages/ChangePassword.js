import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://127.0.0.1:8000/userapi/changepassword/",
        {
          old_password: oldPassword,
          new_password: newPassword,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      alert(response.data.message);

      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.error ||
        "Failed to change password"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a15",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "400px",
            backgroundColor: "#161625",
            padding: "30px",
            borderRadius: "12px",
            border: "1px solid rgba(0,255,255,0.2)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            Change Password
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Current Password"
              value={oldPassword}
              onChange={(e) =>
                setOldPassword(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#252540",
                color: "white",
                boxSizing: "border-box",
              }}
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#252540",
                color: "white",
                boxSizing: "border-box",
              }}
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#252540",
                color: "white",
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "cyan",
                color: "black",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Change Password
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChangePassword;