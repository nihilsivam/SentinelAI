from collections import defaultdict


def correlate_incidents(risk_data):

    if not risk_data:
        return []

    grouped = defaultdict(list)

    # Group similar events together
    for event in risk_data:

        key = (
            event["environment"],
            event["control_id"],
            event["parameter"],
        )

        grouped[key].append(event)

    incidents = []

    for index, ((environment, control, parameter), events) in enumerate(grouped.items(), start=1):

        incidents.append({

            "incident_id": f"INC{index:03}",

            "environment": environment,

            "risk_level": max(
                events,
                key=lambda e: e["risk_score"]
            )["risk_level"],

            "overall_risk": max(
                event["risk_score"]
                for event in events
            ),

            "events": events,

            "event_count": len(events)

        })

    return incidents