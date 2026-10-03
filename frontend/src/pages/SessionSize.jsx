import "../css/SessionSize.css";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SessionSize() {
  const [topicsPerSession, settopicsPerSession] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDays } = location.state;

  const handleContinue = () => {
    navigate("/create-account", {
      state: {
        selectedDays,
        topicsPerSession,
      },
    });
  };

  return (
    <section className="mainContainer">
      <section className="topicsContainer">
        <div className="sessionText">&gt; SESSION_SIZE</div>
        <div className="perSessionText">
          Topics per <br /> session?
        </div>
      </section>

      <span style={{ fontSize: "13px" }}>
        Choose how many topics you want to review each time.
      </span>

      <div className="numberStackCont">
        <div className="numberCont">
          <div
            className={`numberRow ${topicsPerSession === 2 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(2)}
          >
            2
          </div>
          <div
            className={`numberRow ${topicsPerSession === 4 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(4)}
          >
            4
          </div>
          <div
            className={`numberRow ${topicsPerSession === 6 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(6)}
          >
            6
          </div>
          <div
            className={`numberRow ${topicsPerSession === 8 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(8)}
          >
            8
          </div>
        </div>

        <form action="" className="amountForm">
          <input
            type="text"
            placeholder="CUSTOM AMOUNT →"
            onChange={(e) => {
              settopicsPerSession(Number(e.target.value));
            }}
          />
        </form>

        <div className="continueContainer">
          <Button className="sessionContinue" onClick={handleContinue}>
            CONTINUE →
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SessionSize;
