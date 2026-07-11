import MetricsGrid from "../../components/cards/MetricsGrid";
import LineChartCard from "../../components/charts/LineChartCard";
import DonutChartCard from "../../components/charts/DonutChartCard";

function Dashboard() {
  return (
    <>
      <h1
        style={{
          color: "white",
          fontSize: "48px",
          marginBottom: "30px",
        }}
      >
        Security Dashboard
      </h1>

      <MetricsGrid />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
          marginTop: "30px",
        }}
      >
        <LineChartCard />
        <DonutChartCard />
      </div>
    </>
  );
}

export default Dashboard;