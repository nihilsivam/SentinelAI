import "./ErrorState.css";

function ErrorState({ message }) {
  return (
    <div className="error-container">
      <div className="error-icon">
        ⚠
      </div>

      <h2>Something went wrong</h2>

      <p>{message}</p>

      <button
        className="retry-button"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
}

export default ErrorState;