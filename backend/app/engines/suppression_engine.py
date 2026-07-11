def suppress_benign_changes(drifts):

    risky_drifts = []

    for drift in drifts:

        # Rule 1: Approved maintenance changes
        if (
            drift["approval_status"] == "approved"
            and drift["maintenance_window"] is True
        ):
            continue

        # Rule 2: Approved CI/CD deployment
        if (
            drift["change_source"] == "CI/CD"
            and drift["approval_status"] == "approved"
        ):
            continue

        risky_drifts.append(drift)

    return risky_drifts