import { useState } from "react";
import DayRow from "./DayRow";

{
  /* this is solelly a prop that handles state ad not solely but mostly*/
}
function Schedule() {
  const [mon, setMon] = useState(true);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(true);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(true);
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);

  return (
    <>
      {/* this is us passing data to the day row component in order to re-render based on state 
    seperating data and view is ideal - this is the idea of props */}
      <div className="dayPicker">
        <DayRow label="MON" checked={mon} onToggle={() => setMon(!mon)} />
        <DayRow label="TUE" checked={tue} onToggle={() => setTue(!tue)} />
        <DayRow label="WED" checked={wed} onToggle={() => setWed(!wed)} />
        <DayRow label="THU" checked={thu} onToggle={() => setThu(!thu)} />
        <DayRow label="FRI" checked={fri} onToggle={() => setFri(!fri)} />
        <DayRow label="SAT" checked={sat} onToggle={() => setSat(!sat)} />
        <DayRow label="SUN" checked={sun} onToggle={() => setSun(!sun)} />
      </div>
    </>
  );
}

export default Schedule;
