import "../css/StatsScr.css";
import RecallChart from "../components/RecallChart";
import Footer from "../components/Footer";
import DottedLine from "../components/DottedLine";

function StatsScr() {
  return (
    <section className="statsContainer">
      <div className="recordContainer">
        <div className="itemPrompt">&gt; ITEM RECORD</div>
        <h1 className="itemTitle">Two Sum</h1>
      </div>
      <div className="chartSection">
        <RecallChart />
      </div>

      <div className="sectionLabelRow">
        <div className="sectionLabel">LAST 7 DAYS</div>
        <DottedLine></DottedLine>
      </div>
      <div className="calendarRow">
        <div className="dayCell done">M</div>
        <div className="dayCell done">T</div>
        <div className="dayCell">W</div>
        <div className="dayCell done">T</div>
        <div className="dayCell done">F</div>
        <div className="dayCell">S</div>
        <div className="dayCell today">S</div>
      </div>

      <div className="terminalPanel">
        <div className="statRow">
          <span>REPETITIONS</span>
          <span className="dots">..............</span>
          <span className="statValue">4</span>
        </div>
        <div className="statRow">
          <span>EASE FACTOR</span>
          <span className="dots">..............</span>
          <span className="statValue">2.4</span>
        </div>
        <div className="statRow">
          <span>BEST SCORE</span>
          <span className="dots">..............</span>
          <span className="statValue">92%</span>
        </div>
        <div className="statRow">
          <span>NEXT REVIEW</span>
          <span className="dots">..............</span>
          <span className="statValue">AUG 01</span>
        </div>
      </div>

      <section className="footerCont">
        <Footer styleName="footerchildscr" statsController="statsHard"></Footer>
      </section>
    </section>
  );
}

export default StatsScr;
