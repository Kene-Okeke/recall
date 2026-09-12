import "../css/LoginScr.css";
import Button from "../components/Button.jsx";

function LoginScr() {
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
          <form action="">
            <div className="emailBox">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="passwordBox">
              <label htmlFor="username">PASSWORD</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="........"
              />
              <button type="button" className="forgotPassword">
                FORGOT PASSWORD?
              </button>
            </div>
          </form>
        </section>

        <div className="logInButtonCont">
          <Button> LOG IN →</Button>
          <h2>
            NEW HERE? <a href="">CREATE AN ACCOUNT</a>
          </h2>
        </div>
      </section>
    </>
  );
}

export default LoginScr;
