def build_dashboard(
    baseline_controls,
    risk_data,
    incidents
):

    total_controls = len(baseline_controls)
    active_drifts = len(risk_data)
    healthy_controls = total_controls - active_drifts

    critical_incidents = sum(
        1
        for incident in incidents
        if incident["overall_risk"] >= 90
    )

    compliance_score = round(
        (healthy_controls / total_controls) * 100,
        1
    )

    if active_drifts == 0:
        overall_risk = 0
    else:
        overall_risk = round(
            sum(item["risk_score"] for item in risk_data)
            / active_drifts,
            1
        )

    # ----------------------------
    # Risk Distribution
    # ----------------------------

    risk_distribution = {
        "critical": 0,
        "high": 0,
        "medium": 0,
        "low": 0
    }

    for item in risk_data:

        level = item["risk_level"].lower()

        if level in risk_distribution:
            risk_distribution[level] += 1

    # ----------------------------
    # Compliance Summary
    # ----------------------------

    compliance_summary = {
        "NIST": set(),
        "CIS": set(),
        "GDPR": set()
    }

    for incident in incidents:

        compliance = incident.get("compliance", {})

        for framework in compliance:

            compliance_summary[framework].update(
                compliance[framework]
            )

    compliance_summary = {
        key: len(value)
        for key, value in compliance_summary.items()
    }

    return {

        "summary": {

            "total_controls": total_controls,

            "healthy_controls": healthy_controls,

            "active_drifts": active_drifts,

            "critical_incidents": critical_incidents,

            "overall_risk": overall_risk,

            "compliance_score": compliance_score
        },

        "risk_distribution": risk_distribution,

        "compliance_summary": compliance_summary,

        "recent_incidents": incidents,

        "top_risks": sorted(
            risk_data,
            key=lambda x: x["risk_score"],
            reverse=True
        )[:5]
    }