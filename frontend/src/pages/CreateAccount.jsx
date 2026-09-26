import "../css/createAccount.css";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <section className="mainContainer">
      <div className="progressDots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <section className="welcomeContainer">
        <div className="welcomeText">&gt; CREATE_ACCOUNT</div>
        <div className="punchDetailsStatement">
          Punch your <br />
          details in
        </div>
      </section>

      <section className="accountForm">
        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="userNameBox">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="okeke_dev"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="........"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </section>

      <div className="signUpButtonCont">
        <Button type="submit" form="signupForm">
          CREATE ACCOUNT →
        </Button>
        <h2>
          ALREADY HAVE AN ACCOUNT? <Link to="/login">LOG IN</Link>
        </h2>
      </div>
    </section>
  );
}

export default CreateAccount;
