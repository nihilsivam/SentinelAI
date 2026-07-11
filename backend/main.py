from fastapi import FastAPI

# Import JSON Loader functions
from app.services.json_loader import (
    load_baseline_controls,
    load_change_events
)

# Import Engines
from app.engines.drift_engine import detect_drift
from app.engines.suppression_engine import suppress_benign_changes


app = FastAPI(
    title="SentinelAI API",
    description="AI-Powered Security Control Drift & Compliance Intelligence Platform",
    version="1.0.0"
)


# --------------------------------------------------
# Home API
# --------------------------------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to SentinelAI",
        "status": "Backend Running"
    }


# --------------------------------------------------
# Baseline Controls API
# --------------------------------------------------
@app.get("/baseline")
def baseline():
    return load_baseline_controls()


# --------------------------------------------------
# Change Events API
# --------------------------------------------------
@app.get("/events")
def events():
    return load_change_events()


# --------------------------------------------------
# Drift Detection API
# --------------------------------------------------
@app.get("/drift")
def drift():

    baseline_controls = load_baseline_controls()

    change_events = load_change_events()

    detected_drifts = detect_drift(
        baseline_controls,
        change_events
    )

    return detected_drifts


# --------------------------------------------------
# Benign Change Suppression API
# --------------------------------------------------
@app.get("/suppressed")
def suppressed():

    baseline_controls = load_baseline_controls()

    change_events = load_change_events()

    detected_drifts = detect_drift(
        baseline_controls,
        change_events
    )

    risky_drifts = suppress_benign_changes(
        detected_drifts
    )

    return risky_drifts