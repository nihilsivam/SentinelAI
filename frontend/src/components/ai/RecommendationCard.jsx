import "./RecommendationCard.css";

function RecommendationCard({ recommendations }) {
  return (
    <div className="recommendation-card">
      <h3>Recommended Actions</h3>

      <div className="recommendation-list">
        {recommendations.map((item, index) => (
          <div key={index} className="recommendation-item">
            <span className="recommendation-text">
              ✅ {item}
            </span>

            <button className="run-button">
              ▶ Run
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationCard;