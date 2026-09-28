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
        this decides how many due cards your queue pulls each time
      </span>

      <div className="numberStackCont">
        <div className="numberCont">
          <div
            className={`numberRow ${topicsPerSession === 5 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(5)}
          >
            5
          </div>
          <div
            className={`numberRow ${topicsPerSession === 10 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(10)}
          >
            10
          </div>
          <div
            className={`numberRow ${topicsPerSession === 15 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(15)}
          >
            15
          </div>
          <div
            className={`numberRow ${topicsPerSession === 20 ? "selected" : ""}`}
            onClick={() => settopicsPerSession(20)}
          >
            20
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
