import "../css/Review.css";
import ScoreSlider from "../components/ScoreSlider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Review() {
  const [notes, setNotes] = useState("");

  const [score, setScore] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const { topicId, topicTitle } = location.state;

  const submitReview = async (e) => {
    const response = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ score, topic_id: topicId, notes }),
    });

    if (response.ok) {
      navigate("/");
    }
  };
  return (
    <>
      <section className="mainContainer">
        <div className="firstReviewDetails">
          <h1 className="ReviewText"> &gt; REVIEW</h1>
          <h2 className="reviewTopic">{topicTitle}</h2>
        </div>

        <div className="howtextanddots">
          <h2>HOW DID IT GO, FIRST TRY?</h2>
          <div className="dottedLine"></div>
        </div>

        <div className="scorecardsContainer">
          <div className="scorerangeSection">
            <h2
              className={`firstRange ${score === 20 ? "active" : ""}`}
              onClick={(e) => {
                setScore(20);
              }}
            >
              0–39
            </h2>
            <h2
              className={`secondRange ${score === 57 ? "active" : ""}`}
              onClick={(e) => {
                setScore(57);
              }}
            >
              40–74
            </h2>
            <h2
              className={`thirdRange ${score === 88 ? "active" : ""}`}
              onClick={(e) => {
                setScore(88);
              }}
            >
              75–100
            </h2>
          </div>
          <span className="honestText">
            be honest — this just sets your starting point
          </span>
        </div>
        <section className="scoreSection">
          <div className="scoreSlidercont">
            <ScoreSlider score={score} setScore={setScore} />
          </div>
        </section>

        <section className="addnotesSection">
          <h2>✏️FEEL FREE TO ADD A NOTE</h2>
          <label>
            <textarea
              name="notes"
              id="notes"
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>
          </label>
        </section>

        <div className="terminalPanel">
          <div className="row">
            <span>STARTING EASE</span>
            <span className="dots">..............</span>
            <span className="val">2.5</span>
          </div>
          <div class="row">
            <span>FIRST INTERVAL</span>
            <span className="dots">..............</span>
            <span className="val">1 DAY</span>
          </div>
        </div>

        <button className="completeReviewButton" onClick={submitReview}>
          COMPLETE REVIEW →
        </button>
      </section>
    </>
  );
}
export default Review;
