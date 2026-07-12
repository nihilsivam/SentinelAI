import { useEffect, useState } from "react";

import "./Mitre.css";

import { getMitreData } from "../../services/mitreService";

const mitreMap = {
  LOGGING_DISABLED: {
    id: "T1562",
    tactic: "Defense Evasion",
    technique: "Disable Security Tools",
  },

  MFA_DISABLED: {
    id: "T1110",
    tactic: "Credential Access",
    technique: "Brute Force / MFA Weakness",
  },

  ENCRYPTION_DOWNGRADE: {
    id: "T1485",
    tactic: "Impact",
    technique: "Encryption Downgrade",
  },

  COMPLIANCE_VIOLATION: {
    id: "T1078",
    tactic: "Initial Access",
    technique: "Valid Accounts",
  },

  ACCESS_BROADENED: {
    id: "T1098",
    tactic: "Privilege Escalation",
    technique: "Account Manipulation",
  },

  CLOUDTRAIL_DISABLED: {
    id: "T1562",
    tactic: "Defense Evasion",
    technique: "Disable Logging",
  },

  UNAPPROVED_CHANGE: {
    id: "T1600",
    tactic: "Execution",
    technique: "Configuration Change",
  },

  EMERGENCY_CHANGE_NOT_REVERTED: {
    id: "T1499",
    tactic: "Impact",
    technique: "Configuration Persistence",
  },
};

function Mitre() {

  const [techniques, setTechniques] = useState([]);

  useEffect(() => {

    async function load() {

      const incidents = await getMitreData();

      const grouped = {};

      incidents.forEach((incident) => {

        const drift = incident.events[0].parameter;

        const mapping = mitreMap[drift];

        if (!mapping) return;

        if (!grouped[mapping.id]) {

          grouped[mapping.id] = {

            ...mapping,

            count: 0,

          };

        }

        grouped[mapping.id].count++;

      });

      setTechniques(Object.values(grouped));

    }

    load();

  }, []);

  return (

    <div className="mitre-page">

      <h1>MITRE ATT&CK Dashboard</h1>

      <p>
        Security events mapped to MITRE ATT&CK techniques.
      </p>

      <div className="mitre-grid">

        {techniques.map((item) => (

          <div
            className="mitre-card"
            key={item.id}
          >

            <h3>{item.id}</h3>

            <h2>{item.tactic}</h2>

            <p>{item.technique}</p>

            <span>

              {item.count} Incident(s)

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Mitre;