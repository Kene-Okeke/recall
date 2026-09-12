import "../css/StudySchedule.css";
import Schedule from "../components/Schedule.jsx";
import Button from "../components/Button.jsx";

function StudySchedule() {
  return (
    <>
      <div className="mainContainer">
        <section className="titleSection">
          <div className="scheduleText">&gt; STUDY_SCHEDULE</div>
          <div className="scheduleQuestion">
            How many days <br />a week?
          </div>
        </section>

        <div className="dayChoicecont">
          <Schedule />
        </div>

        <div className="buttonContainer">
          <Button>CONTINUE - 3 DAYS/WEEK →</Button>
        </div>
      </div>
    </>
  );
}

export default StudySchedule;
