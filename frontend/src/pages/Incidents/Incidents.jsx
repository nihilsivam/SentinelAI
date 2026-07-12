import { useEffect, useState } from "react";

import "./Incidents.css";

import IncidentTable from "../../components/tables/IncidentTable";
import IncidentDetailsModal from "../../components/IncidentDetailsModal/IncidentDetailsModal";

import { getIncidents } from "../../services/incidentService";

function Incidents() {

  const [incidents, setIncidents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedIncident, setSelectedIncident] = useState(null);

  useEffect(() => {

    async function loadIncidents() {

      try {

        const data = await getIncidents();

        setIncidents(data);

      }

      catch (err) {

        console.error(err);

        setError("Unable to load incidents.");

      }

      finally {

        setLoading(false);

      }

    }

    loadIncidents();

  }, []);

  return (

    <div className="incidents-page">

      <div className="page-header">

        <h1>Security Incidents</h1>

        <p>
          Monitor, investigate and prioritize detected security control drifts
          across your enterprise environment.
        </p>

      </div>

      {loading ? (

        <div className="loading-state">

          <h2>Loading incidents...</h2>

        </div>

      ) : error ? (

        <div className="error-state">

          <h2>{error}</h2>

        </div>

      ) : (

        <>

          <IncidentTable
            incidents={incidents}
            onView={setSelectedIncident}
          />

          {selectedIncident && (

            <IncidentDetailsModal
              incident={selectedIncident}
              onClose={() => setSelectedIncident(null)}
            />

          )}

        </>

      )}

    </div>

  );

}

export default Incidents;