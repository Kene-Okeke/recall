import "../css/StudySchedule.css";
import DayRow from "../components/DayRow.jsx";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudySchedule() {
  const [mon, setMon] = useState(true);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(true);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(true);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);

  const selectedDays = [];
  if (mon) {
    selectedDays.push("Monday");
  }
  if (tue) {
    selectedDays.push("Tuesday");
  }
  if (wed) {
    selectedDays.push("Wednesday");
  }
  if (thu) {
    selectedDays.push("Thursday");
  }
  if (fri) {
    selectedDays.push("Friday");
  }
  if (sat) {
    selectedDays.push("Saturday");
  }
  if (sun) {
    selectedDays.push("Sunday");
  }

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/session-size", {
      state: {
        selectedDays,
      },
    });
  };

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
          <DayRow label="MON" checked={mon} onToggle={() => setMon(!mon)} />
          <DayRow label="TUE" checked={tue} onToggle={() => setTue(!tue)} />
          <DayRow label="WED" checked={wed} onToggle={() => setWed(!wed)} />
          <DayRow label="THU" checked={thu} onToggle={() => setThu(!thu)} />
          <DayRow label="FRI" checked={fri} onToggle={() => setFri(!fri)} />
          <DayRow label="SAT" checked={sat} onToggle={() => setSat(!sat)} />
          <DayRow label="SUN" checked={sun} onToggle={() => setSun(!sun)} />
        </div>

        <div className="buttonContainer">
          <Button onClick={handleContinue}>CONTINUE - 3 DAYS/WEEK →</Button>
        </div>
      </div>
    </>
  );
}

export default StudySchedule;
