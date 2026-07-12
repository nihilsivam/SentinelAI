import "./AIInvestigationCard.css";

import ConfidenceCard from "./ConfidenceCard";
import RootCauseCard from "./RootCauseCard";
import RecommendationCard from "./RecommendationCard";
import MitreMatrix from "./MitreMatrix";

function AIInvestigationCard({ investigation }) {

  return (

    <section className="ai-investigation">

      <div className="ai-header">

        <div>

          <h2>AI Investigation</h2>

          <p className="ai-subtitle">

            AI-powered root cause analysis for the detected incident

          </p>

        </div>

        <div className="ai-buttons">

          <button className="primary-btn">

            📄 Generate Report

          </button>

          <button className="secondary-btn">

            ▶ Run Playbook

          </button>

        </div>

      </div>

      <div className="ai-layout">

        <div className="ai-left">

          <ConfidenceCard
            confidence={investigation.confidence}
            priority={investigation.priority}
          />

          <RootCauseCard
            rootCause={investigation.rootCause}
          />

          <RecommendationCard
            recommendations={investigation.recommendations}
          />

        </div>

        <div className="ai-right">

          <MitreMatrix />

        </div>

      </div>

    </section>

  );

}

export default AIInvestigationCard;