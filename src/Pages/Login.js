import React from "react";
import Button from "@material-ui/core/Button";
import logo from "../img/logo.png";
import { auth, provider } from "../firebase";

const Login = ({ setUser }) => {
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const userData = result.user;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <section className="login_page">
        <div className="container">
          <div className="login_container">
            <div className="login_image">
              <img src={logo} alt="Logo" />
            </div>
            <h2>Sign in</h2>
            <p>Sign with Google to join the chat 😍</p>
            <div className="login_button">
              <Button onClick={SignIn} variant="contained" color="secondary">
                Sign in with Google
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
