from datetime import datetime


def correlate_incidents(risk_data):

    if not risk_data:
        return []

    # Convert timestamps to datetime objects
    sorted_events = sorted(
        risk_data,
        key=lambda x: datetime.fromisoformat(x["timestamp"])
    )

    incidents = []

    current_incident = {
        "incident_id": "INC001",
        "environment": sorted_events[0]["environment"],
        "risk_level": "CRITICAL",
        "overall_risk": 0,
        "events": [],
        "event_count": 0
    }

    previous_time = None

    for event in sorted_events:

        current_time = datetime.fromisoformat(event["timestamp"])

        if previous_time is not None:

            difference = (
                current_time - previous_time
            ).total_seconds() / 60

            # If more than 15 minutes, start a new incident
            if difference > 15:

                current_incident["event_count"] = len(
                    current_incident["events"]
                )

                incidents.append(current_incident)

                current_incident = {
                    "incident_id": f"INC{len(incidents)+1:03}",
                    "environment": event["environment"],
                    "risk_level": "CRITICAL",
                    "overall_risk": 0,
                    "events": [],
                    "event_count": 0
                }

        current_incident["events"].append(event)

        current_incident["overall_risk"] = max(
            current_incident["overall_risk"],
            event["risk_score"]
        )

        previous_time = current_time

    current_incident["event_count"] = len(
        current_incident["events"]
    )

    incidents.append(current_incident)

    return incidents