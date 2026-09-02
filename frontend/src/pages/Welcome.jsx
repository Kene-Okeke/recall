import "../css/Welcome.css";

function Welcome() {
  return (
    <>
      <section className="welcomeContainer">
        <div className="bootingGifs">
          <span> &gt; BOOTING RECALL OS...</span>
          <span> &gt; LOADING MEMORY BANKS... OK</span>
          <span> &gt; SPACED REPETITION ENGINE... READY</span>
        </div>

        <section className="recallWelcomeSection">
          <div className="recallGif">
            <div className="letter">R</div>
            <div className="letter">E</div>
            <div className="letter">C</div>
            <div className="letter">A</div>
            <div className="letter">L</div>
            <div className="letter">L</div>
          </div>

          <div className="rememberGif">
            Remember what matters <span className="cursorBlink">_</span>
          </div>
        </section>

        <section className="getStartedandLogin">
          <button className="getStartedButton">GET STARTED</button>

          <button className="loginButton">I ALREADY HAVE AN ACCOUNT→</button>
        </section>
      </section>
    </>
  );
}

export default Welcome;
