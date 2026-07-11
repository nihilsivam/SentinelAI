import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import "./DonutChartCard.css";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

function DonutChartCard({ driftDistribution }) {
  return (
    <div className="donut-chart-card">
      <h2>Drift Distribution</h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={driftDistribution}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
          >
            {driftDistribution.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DonutChartCard;