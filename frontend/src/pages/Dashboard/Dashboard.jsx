import MetricsGrid from "../../components/cards/MetricsGrid";

function Dashboard() {
  return (
    <>
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "12px",
        }}
      >
        Security Dashboard
      </h1>

      <MetricsGrid />
    </>
  );
}

export default Dashboard;