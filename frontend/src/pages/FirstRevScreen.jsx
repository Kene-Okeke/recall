import "../css/FirstRevScreen.css";
import ScoreSlider from "../components/ScoreSlider";
import MobileNav from "../components/MobileNav";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function FirstRevScreen() {
  const location = useLocation();
  const { title, topicId } = location.state;
  const [notes, setNotes] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  /* this is the async function that allows us to post our first review topic
   */
  const submitReview = async (e) => {
    const token = localStorage.getItem("recall_token");

    const response = await fetch(import.meta.env.VITE_API_URL + "/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        score,
        topic_id: topicId,
        notes,
        from_queue: false,
      }),
    });

    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <>
      <section className="mainContainer">
        <MobileNav />

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
            <h2
              className={`firstRange ${score === 20 ? "active" : ""}`}
              onClick={() => {
                setScore(20);
              }}
            >
              0–39
            </h2>

            <h2
              className={`secondRange ${score === 57 ? "active" : ""}`}
              onClick={() => {
                setScore(57);
              }}
            >
              40–74
            </h2>

            <h2
              className={`thirdRange ${score === 88 ? "active" : ""}`}
              onClick={() => {
                setScore(88);
              }}
            >
              75–100
            </h2>
          </div>

          <section className="honestSection">
            <span className="honestText">
              be honest — this just sets your starting point
            </span>
          </section>
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

        <div className="first-terminal-Panel">
          <div className="row">
            <span>STARTING EASE</span>
            <span className="dots">..............</span>
            <span className="val">2.5</span>
          </div>

          <div className="row">
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

export default FirstRevScreen;
