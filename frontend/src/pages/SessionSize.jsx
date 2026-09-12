import "../css/SessionSize.css";
import Button from "../components/Button.jsx";

function SessionSize() {
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
          <div className="numberRow">5</div>
          <div className="numberRow">10</div>
          <div className="numberRow">15</div>
          <div className="numberRow">20</div>
        </div>

        <form action="" className="amountForm">
          <input type="text" placeholder="CUSTOM AMOUNT →" />
        </form>

        <div className="continueContainer">
          <Button className="sessionContinue">CONTINUE →</Button>
        </div>
      </div>
    </section>
  );
}

export default SessionSize;
