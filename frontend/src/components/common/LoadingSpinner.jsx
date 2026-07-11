import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>

      <h2>Loading Dashboard...</h2>

      <p>Please wait while SentinelAI loads the latest security data.</p>
    </div>
  );
}

export default LoadingSpinner;