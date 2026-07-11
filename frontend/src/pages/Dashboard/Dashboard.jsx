import { useEffect, useState } from "react";
import "./Dashboard.css";

import MetricsGrid from "../../components/cards/MetricsGrid";
import LineChartCard from "../../components/charts/LineChartCard";
import DonutChartCard from "../../components/charts/DonutChartCard";
import IncidentTable from "../../components/tables/IncidentTable";
import AIInvestigationCard from "../../components/ai/AIInvestigationCard";

import LoadingSpinner from "../../components/common/LoadingSpinner";
import ErrorState from "../../components/common/ErrorState";

import { getDashboardMetrics } from "../../services/dashboardService";
import { getChartData } from "../../services/chartService";
import { getIncidents } from "../../services/incidentService";
import { getInvestigation } from "../../services/investigationService";

function Dashboard() {
  const [metrics, setMetrics] = useState([]);
  const [securityTrend, setSecurityTrend] = useState([]);
  const [driftDistribution, setDriftDistribution] = useState([]);
  const [incidents, setIncidents] = useState([]);
  const [investigation, setInvestigation] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const metricsData = await getDashboardMetrics();
        const chartData = await getChartData();
        const incidentsData = await getIncidents();
        const investigationData = await getInvestigation();

        setMetrics(metricsData);
        setSecurityTrend(chartData.securityTrend);
        setDriftDistribution(chartData.driftDistribution);
        setIncidents(incidentsData);
        setInvestigation(investigationData);
      } catch (err) {
        console.error(err);
        setError("Unable to load SentinelAI dashboard.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorState message={error} />;
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        Security Dashboard
      </h1>

      <MetricsGrid metrics={metrics} />

      <section className="charts-grid">
        <LineChartCard securityTrend={securityTrend} />
        <DonutChartCard driftDistribution={driftDistribution} />
      </section>

      <section className="table-section">
        <IncidentTable incidents={incidents} />
      </section>

      {investigation && (
        <section className="ai-section">
          <AIInvestigationCard
            investigation={investigation}
          />
        </section>
      )}
    </div>
  );
}

export default Dashboard;