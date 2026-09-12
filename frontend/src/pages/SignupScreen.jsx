import "../css/SignupScreen.css";
import Button from "../components/Button.jsx";

function SignupScreen() {
  return (
    <>
      <section className="accountContainer">
        <section className="createAccount">
          <div className="createText">&gt; CREATE_ACCOUNT</div>
          <div className="createStatement">
            Punch your <br /> details in
          </div>
        </section>

        <section className="accountForm">
          <form action="">
            <div className="userNameBox">
              <label htmlFor="username">USERNAME</label>
              <input type="text" name="username" id="username" />
            </div>

            <div className="emailBox">
              <label htmlFor="email">EMAIL</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="passwordBox">
              <label htmlFor="username">PASSWORD</label>
              <input type="password" name="password" id="password" />
            </div>
          </form>
        </section>

        <div className="signUpButtonCont">
          <Button>CREATE ACCOUNT →</Button>
          <h2>
            ALREADY HAVE AN ACCOUNT? <a href="">LOG IN</a>
          </h2>
        </div>
      </section>
    </>
  );
}

export default SignupScreen;
