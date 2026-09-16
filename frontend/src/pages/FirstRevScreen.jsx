import "../css/FirstRevScreen.css";
import ScoreSlider from "../components/ScoreSlider";
import { useLocation } from "react-router-dom";

function FirstRevScreen() {
  const location = useLocation();
  const { title } = location.state;
  return (
    <>
      <section className="mainContainer">
        <div className="firstReviewDetails">
          <h1 className="firstReviewText"> &gt; FIRST_REVIEW</h1>
          <h2 className="reviewTopic">{title}</h2>
        </div>

        <div className="howtextanddots">
          <h2>HOW DID IT GO, FIRST TRY?</h2>
          <div className="dottedLine"></div>
        </div>

        <div className="scorecardsContainer">
          <div className="scorerangeSection">
            <h2 className="firstRange">0–39</h2>
            <h2 className="secondRange">40–74</h2>
            <h2 className="thirdRange">75–100</h2>
          </div>
          <span className="honestText">
            be honest — this just sets your starting point
          </span>
        </div>
        <section className="scoreSection">
          <div className="scoreSlidercont">
            <ScoreSlider />
          </div>
        </section>

        <section className="addnotesSection">
          <h2>✏️FEEL FREE TO ADD A NOTE</h2>
          <label>
            <textarea name="notes" id="notes"></textarea>
          </label>
        </section>

        <div class="terminalPanel">
          <div class="row">
            <span>STARTING EASE</span>
            <span class="dots">..............</span>
            <span class="val">2.5</span>
          </div>
          <div class="row">
            <span>FIRST INTERVAL</span>
            <span class="dots">..............</span>
            <span class="val">1 DAY</span>
          </div>
        </div>

        <button className="completeReviewButton">COMPLETE REVIEW →</button>
      </section>
    </>
  );
}

export default FirstRevScreen;
