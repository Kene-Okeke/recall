import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../css/RecallChart.css";

function RecallChart({ data }) {
  return (
    <div className="chartCard">
      <div className="chartTitle">RECALL % OVER TIME</div>

      <ResponsiveContainer width="100%" height={110}>
        <LineChart data={data}>
          <CartesianGrid
            stroke="#2B221A"
            strokeOpacity={0.08}
            vertical={false}
          />

          <XAxis dataKey="date" hide />
          <YAxis hide />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#B2412E"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#E8A33D",
              stroke: "#2B221A",
              strokeWidth: 1.5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RecallChart;
