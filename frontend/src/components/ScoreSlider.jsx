import { useState } from "react";
import "./ScoreSlider.css";

/* this is the score slider component */
function ScoreSlider() {
  const [score, setScore] = useState(0);

  let sliderColor;

  if (score <= 30) {
    sliderColor = "#B2412E";
  } else if (score <= 70) {
    sliderColor = "#E8A33D";
  } else {
    sliderColor = "#F3EAD3";
  }

  return (
    <>
      <input
        className="scoreSlider"
        type="range"
        min={0}
        max={100}
        onChange={(e) => setScore(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, ${sliderColor} ${score}%, #FFFDF7 ${score}%)`,
        }}
      />

      <p className="Score">{score}%</p>
    </>
  );
}

export default ScoreSlider;
