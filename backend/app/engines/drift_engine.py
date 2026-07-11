def detect_drift(baseline_controls, change_events):

    baseline_lookup = {
        control["control_id"]: control
        for control in baseline_controls
    }

    detected_drifts = []

    for event in change_events:

        control = baseline_lookup.get(event["control_id"])

        if control is None:
            continue

        if event["current_value"] != control["baseline_value"]:

            detected_drifts.append({

                "event_id": event["event_id"],

                "control_id": event["control_id"],

                "parameter": event["parameter"],

                "baseline_value": control["baseline_value"],

                "current_value": event["current_value"],

                "severity": control["severity_if_drifted"],

                "environment": control["environment"],

                "changed_by": event["changed_by"],

                "change_source": event["change_source"],

                "approval_status": event["approval_status"],

                "maintenance_window": event["maintenance_window"],

                "timestamp": event["timestamp"],

                "status": "DRIFT DETECTED"

            })

    return detected_drifts