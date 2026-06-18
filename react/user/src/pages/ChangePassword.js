import Header from "../components/Header";
import Footer from "../components/Footer";

function ChangePassword() {
  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #141414;
          }

          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .card {
            background: #1f1f1f;
            padding: 30px;
            border-radius: 10px;
            width: 350px;
            color: white;
          }

          h2 {
            text-align: center;
            margin-bottom: 20px;
          }

          input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: none;
            border-radius: 5px;
            background: #333;
            color: white;
          }

          button {
            width: 100%;
            padding: 10px;
            background: #e50914;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background: #c40812;
          }
        `}
      </style>

      <div className="container">
        <Header />
        <div className="card">
          <h2>Change Password</h2>

          <form>
            <input
              type="password"
              placeholder="Current Password"
            />

            <input
              type="password"
              placeholder="New Password"
            />

            <input
              type="password"
              placeholder="Confirm New Password"
            />

            <button type="submit">
              Change Password
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ChangePassword;