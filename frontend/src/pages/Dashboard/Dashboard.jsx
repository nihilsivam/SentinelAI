import MetricsGrid from "../../components/cards/MetricsGrid";
import LineChartCard from "../../components/charts/LineChartCard";
import DonutChartCard from "../../components/charts/DonutChartCard";
import IncidentTable from "../../components/tables/IncidentTable";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Security Dashboard</h1>

      {/* KPI Cards */}
      <MetricsGrid />

      {/* Charts */}
      <div className="charts-grid">
        <LineChartCard />
        <DonutChartCard />
      </div>

      {/* Critical Incidents */}
      <IncidentTable />
    </div>
  );
}

export default Dashboard;