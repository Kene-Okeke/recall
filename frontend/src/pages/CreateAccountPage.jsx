import "../css/createAccount.css";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");
  const location = useLocation();
  const { selectedDays, topicsPerSession } = location.state || {};
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setGeneralError("");

    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/create-account",
      {
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
      },
    );

    // handle validation / server errors instead of silently doing nothing
    if (!response.ok) {
      const data = await response.json();

      if (response.status === 422 && data.errors) {
        setErrors(data.errors);
      } else {
        setGeneralError(
          data.message || "Something went wrong. Please try again.",
        );
      }
      return;
    }

    // if user account creation works then post onboarding details first session size
    const sessionSizeResponse = await fetch(
      import.meta.env.VITE_API_URL + "/api/saveSessionSize",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          topics_per_session: topicsPerSession,
        }),
      },
    );

    if (sessionSizeResponse.ok) {
      const scheduledDaysresponse = await fetch(
        import.meta.env.VITE_API_URL + "/api/saveSchedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            selectedDays,
          }),
        },
      );

      if (scheduledDaysresponse.ok) {
        navigate("/");
      }
    }
  };

  return (
    <section className="mainContainer">
      <section className="welcomeContainer">
        <div className="welcomeText">&gt; CREATE_ACCOUNT</div>
        <div className="punchDetailsStatement">
          Punch your <br />
          details in
        </div>
      </section>

      <section className="accountForm">
        {generalError && <p className="formError">{generalError}</p>}

        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="userNameBox">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="fieldError">{errors.username[0]}</p>
            )}
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
            {errors.email && <p className="fieldError">{errors.email[0]}</p>}
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
            {errors.password && (
              <p className="fieldError">{errors.password[0]}</p>
            )}
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
