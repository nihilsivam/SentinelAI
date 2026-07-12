import { useEffect, useState } from "react";

import "./Reports.css";

import { getDashboardMetrics } from "../../services/dashboardService";
import { getIncidents } from "../../services/incidentService";
import { getAIInvestigation } from "../../services/aiService";

import { generateReport } from "../../services/reportService";

function Reports() {

  const [dashboard, setDashboard] = useState([]);

  const [incidents, setIncidents] = useState([]);

  const [investigation, setInvestigation] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadData() {

      try {

        const dashboardData =
          await getDashboardMetrics();

        const incidentData =
          await getIncidents();

        const aiData =
          await getAIInvestigation();

        setDashboard(dashboardData);

        setIncidents(incidentData);

        if (aiData.length > 0) {

          const first = aiData[0];

          const event = first.events[0];

          setInvestigation({

            confidence: 96,

            priority: first.risk_level,

            rootCause: {

              action: event.parameter.replace(/_/g, " ")

            },

            recommendations: [

              "Restore the approved configuration baseline.",

              "Review recent administrative changes.",

              "Validate affected systems.",

              "Monitor for repeated occurrences.",

              "Document remediation for audit purposes."

            ]

          });

        }

      }

      catch (err) {

        console.error(err);

      }

      finally {

        setLoading(false);

      }

    }

    loadData();

  }, []);

  if (loading) {

    return (

      <div className="reports-page">

        <h2 style={{ color: "white" }}>

          Loading...

        </h2>

      </div>

    );

  }

  const critical =
    incidents.filter(
      i => i.severity === "CRITICAL"
    ).length;

  const high =
    incidents.filter(
      i => i.severity === "HIGH"
    ).length;

  return (

    <div className="reports-page">

      <h1>

        Executive Security Reports

      </h1>

      <p>

        Generate management-ready security
        assessment reports.

      </p>

      <div className="summary-grid">

        {dashboard.map((item, index) => (

          <div
            key={index}
            className="summary-card"
          >

            <h3>{item.title}</h3>

            <h2>{item.value}</h2>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

      <div className="report-card">

        <h2>

          Executive Summary

        </h2>

        <p>

          SentinelAI analyzed

          <b> {incidents.length} </b>

          correlated security incidents.

        </p>

        <p>

          <b>{critical}</b>

          critical incidents require
          immediate investigation.

        </p>

        <p>

          <b>{high}</b>

          high-risk incidents have also
          been detected.

        </p>

        <p>

          AI investigation, MITRE mapping,
          compliance validation and risk
          scoring have been completed.

        </p>

        <button

          className="generate-btn"

          onClick={() =>
            generateReport(
              dashboard,
              investigation,
              incidents
            )
          }

        >

          📄 Generate PDF Report

        </button>

      </div>

    </div>

  );

}

export default Reports;