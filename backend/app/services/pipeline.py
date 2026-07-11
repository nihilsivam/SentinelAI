from app.services.json_loader import (
    load_baseline_controls,
    load_change_events
)

from app.engines.drift_engine import detect_drift
from app.engines.suppression_engine import suppress_benign_changes
from app.engines.risk_engine import calculate_risk
from app.engines.correlation_engine import correlate_incidents


def process_pipeline():

    baseline_controls = load_baseline_controls()

    change_events = load_change_events()

    detected_drifts = detect_drift(
        baseline_controls,
        change_events
    )

    risky_drifts = suppress_benign_changes(
        detected_drifts
    )

    risk_data = calculate_risk(
        risky_drifts
    )

    return risk_data


def process_incidents():

    risk_data = process_pipeline()

    incidents = correlate_incidents(
        risk_data
    )

    return incidents