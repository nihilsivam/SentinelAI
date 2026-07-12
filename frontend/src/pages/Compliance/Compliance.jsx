import { useEffect, useState } from "react";

import "./Compliance.css";

import { getComplianceData } from "../../services/complianceService";

function Compliance() {

  const [incidents, setIncidents] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadCompliance() {

      try {

        const data = await getComplianceData();

        setIncidents(data.incidents || []);
      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadCompliance();

  }, []);

  if (loading) {

    return (

      <div className="compliance-page">

        <h1>Loading...</h1>

      </div>

    );

  }

  let nist = new Set();

  let cis = new Set();

  let gdpr = new Set();

  incidents.forEach((incident) => {

    const compliance = incident.compliance || {};

    (compliance.NIST || []).forEach(x => nist.add(x));

    (compliance.CIS || []).forEach(x => cis.add(x));

    (compliance.GDPR || []).forEach(x => gdpr.add(x));

  });

  return (

    <div className="compliance-page">

      <h1>Compliance Dashboard</h1>

      <p>
        Compliance impact across enterprise security controls.
      </p>

      <div className="framework-grid">

        <div className="framework-card">

          <h3>NIST SP800-53</h3>

          <h2>{nist.size}</h2>

        </div>

        <div className="framework-card">

          <h3>CIS Controls</h3>

          <h2>{cis.size}</h2>

        </div>

        <div className="framework-card">

          <h3>GDPR</h3>

          <h2>{gdpr.size}</h2>

        </div>

      </div>

      <table className="compliance-table">

        <thead>

          <tr>

            <th>Incident</th>

            <th>NIST</th>

            <th>CIS</th>

            <th>GDPR</th>

          </tr>

        </thead>

        <tbody>

          {incidents.map((incident) => (

            <tr key={incident.incident_id}>

              <td>{incident.incident_id}</td>

              <td>
                {(incident.compliance?.NIST || []).join(", ")}
              </td>

              <td>
                {(incident.compliance?.CIS || []).join(", ")}
              </td>

              <td>
                {(incident.compliance?.GDPR || []).join(", ")}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Compliance;