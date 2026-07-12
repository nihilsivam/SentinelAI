from collections import Counter


def build_dashboard(
    baseline_controls,
    all_events,
    risk_data,
    incidents
):

    total_events = len(all_events)

    active_drifts = len(risk_data)

    healthy_events = total_events - active_drifts

    compliance_score = round(
        (healthy_events / total_events) * 100,
        1
    ) if total_events else 0

    overall_risk = round(
        sum(item["risk_score"] for item in risk_data) / active_drifts,
        1
    ) if active_drifts else 0

    critical = 0
    high = 0
    medium = 0
    low = 0

    anomaly_types = []

    for item in risk_data:

        anomaly_types.append(
            item["parameter"]
        )

        level = item["risk_level"].upper()

        if level == "CRITICAL":
            critical += 1

        elif level == "HIGH":
            high += 1

        elif level == "MEDIUM":
            medium += 1

        else:
            low += 1

    critical_incidents = len([
        incident
        for incident in incidents
        if incident["overall_risk"] >= 90
    ])

    risk_distribution = {

        "critical": critical,

        "high": high,

        "medium": medium,

        "low": low

    }

    compliance_summary = {

        "NIST": set(),

        "CIS": set(),

        "GDPR": set()

    }

    for incident in incidents:

        compliance = incident.get(
            "compliance",
            {}
        )

        for framework in compliance:

            compliance_summary[
                framework
            ].update(
                compliance[framework]
            )

    compliance_summary = {

        key: len(value)

        for key, value in compliance_summary.items()

    }

    top_risks = sorted(

        risk_data,

        key=lambda x: x["risk_score"],

        reverse=True

    )[:10]

    drift_counter = Counter(anomaly_types)

    most_common = drift_counter.most_common(5)

    return {

        "summary": {

            "total_controls": total_events,

            "healthy_controls": healthy_events,

            "active_drifts": active_drifts,

            "critical_incidents": critical_incidents,

            "overall_risk": overall_risk,

            "compliance_score": compliance_score

        },

        "risk_distribution": risk_distribution,

        "compliance_summary": compliance_summary,

        "recent_incidents": incidents[:10],

        "top_risks": top_risks,

        "most_common_drifts": [

            {

                "type": drift,

                "count": count

            }

            for drift, count in most_common

        ]

    }