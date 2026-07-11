import "./Dashboard.css";

import MetricsGrid from "../../components/cards/MetricsGrid";

import LineChartCard from "../../components/charts/LineChartCard";
import DonutChartCard from "../../components/charts/DonutChartCard";

import IncidentTable from "../../components/tables/IncidentTable";

import AIInvestigationCard from "../../components/ai/AIInvestigationCard";

import { investigation } from "../../data/aiInvestigationData";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Page Title */}
      <h1 className="dashboard-title">
        Security Dashboard
      </h1>

      {/* KPI Metrics */}
      <MetricsGrid />

      {/* Charts */}
      <section className="charts-grid">
        <LineChartCard />
        <DonutChartCard />
      </section>

      {/* Critical Incidents */}
      <section className="table-section">
        <IncidentTable />
      </section>

      {/* AI Investigation */}
      <section className="ai-section">
        <AIInvestigationCard
          investigation={investigation}
        />
      </section>
    </div>
  );
}

export default Dashboard;