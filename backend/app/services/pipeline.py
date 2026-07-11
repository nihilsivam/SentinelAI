from app.services.json_loader import (
    load_baseline_controls,
    load_change_events,
    load_compliance_mapping
)

from app.engines.drift_engine import detect_drift
from app.engines.suppression_engine import suppress_benign_changes
from app.engines.risk_engine import calculate_risk
from app.engines.correlation_engine import correlate_incidents
from app.engines.compliance_engine import map_compliance

from app.services.dashboard_service import build_dashboard
from app.ai.ai_summary import generate_ai_summary


# --------------------------------------------------
# Security Processing Pipeline
# --------------------------------------------------
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


# --------------------------------------------------
# Incident Processing
# --------------------------------------------------
def process_incidents():

    risk_data = process_pipeline()

    incidents = correlate_incidents(
        risk_data
    )

    compliance_mapping = load_compliance_mapping()

    incidents = map_compliance(
        incidents,
        compliance_mapping
    )

    return incidents


# --------------------------------------------------
# Dashboard Processing
# --------------------------------------------------
def process_dashboard():

    baseline_controls = load_baseline_controls()

    risk_data = process_pipeline()

    incidents = process_incidents()

    dashboard = build_dashboard(
        baseline_controls,
        risk_data,
        incidents
    )

    return dashboard


# --------------------------------------------------
# AI Summary Processing
# --------------------------------------------------
def process_ai_summary():

    incidents = process_incidents()

    summary = generate_ai_summary(
        incidents
    )

    return summary