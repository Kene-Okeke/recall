import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "../css/RecallChart.css";

function RecallChart() {
  const data = [
    { day: "1", recall: 42 },
    { day: "2", recall: 55 },
    { day: "3", recall: 50 },
    { day: "4", recall: 65 },
    { day: "5", recall: 62 },
    { day: "6", recall: 78 },
    { day: "7", recall: 85 },
    { day: "8", recall: 90 },
  ];

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
          <XAxis dataKey="day" hide />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="recall"
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
