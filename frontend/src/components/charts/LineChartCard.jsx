import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import "./LineChartCard.css";

function LineChartCard({ securityTrend }) {
  return (
    <div className="line-chart-card">
      <h2>Security Health Trend</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={securityTrend}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

          <XAxis dataKey="day" stroke="#94A3B8" />

          <YAxis stroke="#94A3B8" />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

          <Line
            type="monotone"
            dataKey="incidents"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartCard;