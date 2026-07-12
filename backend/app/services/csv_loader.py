import csv
import os


DATASET_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(__file__))),
    "datasets",
    "drift_dataset.csv"
)


def load_csv_events():

    events = []

    with open(DATASET_PATH, newline="", encoding="utf-8") as csvfile:

        reader = csv.DictReader(csvfile)

        for row in reader:

            severity = row["severity"].upper()

            if severity == "NONE":
                severity = "LOW"

            event = {

                "event_id": row["record_id"],

                "control_id": row["control_name"],

                "parameter": row["anomaly_type"],

                "baseline_value": True,

                "current_value": not (
                    row["is_anomaly"].lower() == "false"
                ),

                "severity": severity,

                "environment": "Production",

                "changed_by": "Hackathon Dataset",

                "change_source": "CSV",

                "approval_status": "unknown",

                "maintenance_window": False,

                "timestamp": "2026-07-11T10:00:00",

                "status": (
                    "DRIFT DETECTED"
                    if row["is_anomaly"].lower() == "true"
                    else "NORMAL"
                ),

                "risk_score": {
                    "LOW": 20,
                    "MEDIUM": 50,
                    "HIGH": 75,
                    "CRITICAL": 100
                }.get(severity, 20),

                "risk_level": severity,

                "description": row["explanation"]

            }

            events.append(event)

    return events