def calculate_risk(drifts):

    severity_scores = {
        "CRITICAL": 90,
        "HIGH": 70,
        "MEDIUM": 50,
        "LOW": 20
    }

    results = []

    for drift in drifts:

        score = severity_scores.get(drift["severity"], 0)

        # Production systems are more important
        if drift["environment"] == "Production":
            score += 10

        # Pending approval increases risk
        if drift["approval_status"] == "pending":
            score += 5

        # Cap at 100
        score = min(score, 100)

        # Determine risk level
        if score >= 90:
            risk_level = "CRITICAL"
        elif score >= 70:
            risk_level = "HIGH"
        elif score >= 50:
            risk_level = "MEDIUM"
        else:
            risk_level = "LOW"

        drift_copy = drift.copy()

        drift_copy["risk_score"] = score
        drift_copy["risk_level"] = risk_level

        results.append(drift_copy)

    return results