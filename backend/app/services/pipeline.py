from app.services.json_loader import (
    load_baseline_controls,
    load_compliance_mapping
)

from app.services.csv_loader import (
    load_csv_events
)

from app.engines.risk_engine import calculate_risk
from app.engines.correlation_engine import correlate_incidents
from app.engines.compliance_engine import map_compliance

from app.services.dashboard_service import build_dashboard
from app.services.investigation_service import build_investigation
from app.services.timeline_service import build_timeline
from app.services.mitre_service import build_mitre
from app.services.compliance_service import build_compliance

from app.ai.ai_summary import generate_ai_summary


# --------------------------------------------------
# Security Processing Pipeline
# --------------------------------------------------

def process_pipeline():

    csv_events = load_csv_events()

    risky_events = [
        event
        for event in csv_events
        if event["status"] == "DRIFT DETECTED"
    ]

    return calculate_risk(risky_events)


# --------------------------------------------------
# Incident Processing
# --------------------------------------------------

def process_incidents():

    risk_data = process_pipeline()

    incidents = correlate_incidents(risk_data)

    compliance_mapping = load_compliance_mapping()

    return map_compliance(
        incidents,
        compliance_mapping
    )


# --------------------------------------------------
# Dashboard Processing
# --------------------------------------------------

def process_dashboard():

    baseline_controls = load_baseline_controls()

    all_events = load_csv_events()

    risk_data = process_pipeline()

    incidents = process_incidents()

    dashboard = build_dashboard(
        baseline_controls,
        all_events,
        risk_data,
        incidents
    )

    investigation = build_investigation(
        dashboard["top_risks"]
    )

    timeline = build_timeline(
        incidents
    )

    mitre = build_mitre(
        dashboard["top_risks"]
    )

    compliance = build_compliance(
        dashboard["compliance_summary"]
    )

    ai_summary = generate_ai_summary(
        incidents
    )

    return {

        "metrics": dashboard["summary"],

        "charts": {
            "risk_distribution":
                dashboard["risk_distribution"]
        },

        "compliance":
            compliance,

        "incidents":
            dashboard["recent_incidents"],

        "top_risks":
            dashboard["top_risks"],

        "investigation":
            investigation,

        "timeline":
            timeline,

        "mitre":
            mitre,

        "ai_summary":
            ai_summary

    }


# --------------------------------------------------
# AI Summary Processing
# --------------------------------------------------

def process_ai_summary():

    incidents = process_incidents()

    return generate_ai_summary(
        incidents
    )