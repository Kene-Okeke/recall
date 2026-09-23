import "../css/LoginScr.css";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginScr() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      navigate("/");
    }
  };
  return (
    <>
      <section className="mainContainer">
        <section className="welcomeContainer">
          <div className="welcomeText">&gt; WELCOME_BACK</div>
          <div className="logBackStatement">
            Log back <br />
            in
          </div>
        </section>

        <section className="accountForm">
          <form onSubmit="">
            <div className="emailBox">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="passwordBox">
              <label htmlFor="username">PASSWORD</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="........"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="forgotPassword">
                FORGOT PASSWORD?
              </button>
            </div>
          </form>
        </section>
        <form id="loginForm" onSubmit={handleSubmit}></form>

        <div className="logInButtonCont">
          <Button type="submit" form="loginForm">
            {" "}
            LOG IN →
          </Button>
          <h2>
            NEW HERE? <Link to="/create-account">CREATE AN ACCOUNT</Link>
          </h2>
        </div>
      </section>
    </>
  );
}

export default LoginScr;
