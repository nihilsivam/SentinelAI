def generate_ai_summary(incidents):

    if len(incidents) == 0:

        return {
            "executive_summary": "No security incidents detected.",
            "recommendation": "Environment is compliant with the configured baseline."
        }

    incident = incidents[0]

    controls = []

    for event in incident["events"]:
        controls.append(event["parameter"])

    controls = ", ".join(controls)

    frameworks = []

    for framework in incident["compliance"]:

        frameworks.extend(
            incident["compliance"][framework]
        )

    frameworks = ", ".join(frameworks)

    summary = (
        f"{incident['event_count']} correlated configuration drifts "
        f"were detected in the {incident['environment']} environment. "
        f"The affected controls include {controls}. "
        f"These changes resulted in an overall risk score of "
        f"{incident['overall_risk']}."
    )

    recommendation = (
        "Immediately investigate the configuration changes, "
        "verify whether they were authorized, restore the baseline "
        "configuration if necessary, and review compliance impacts "
        f"across {frameworks}."
    )

    return {
        "executive_summary": summary,
        "recommendation": recommendation
    }