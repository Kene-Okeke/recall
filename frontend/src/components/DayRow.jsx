import "../css/DayRow.css";

function DayRow({ label, checked, onToggle }) {
  return (
    <label className={`dayRow ${checked ? "active" : ""}`}>
      <span className="dayLabel">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="dayCheckbox"
      />
    </label>
  );
}

export default DayRow;
