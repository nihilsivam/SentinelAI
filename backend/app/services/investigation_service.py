"""
AI Investigation Builder

Converts the highest-risk security event into a structured
AI Investigation object that the React dashboard can render.
"""


def build_investigation(top_risks):

    # --------------------------------------------------
    # No Risks
    # --------------------------------------------------

    if len(top_risks) == 0:

        return {

            "confidence": 100,

            "asset": "N/A",

            "incident": "No Active Incident",

            "priority": "P3",

            "rootCause": {

                "source": "System",

                "action": "Healthy Environment",

                "result": "No Drift Detected"

            },

            "businessImpact": {

                "title": "No Business Impact",

                "estimate": "€0"

            },

            "attackExposure": {

                "technique": "None",

                "confidence": "100%"

            },

            "recommendations": [

                "Continue Continuous Monitoring"

            ]
        }

    # --------------------------------------------------
    # Highest Risk Event
    # --------------------------------------------------

    risk = top_risks[0]

    parameter = (
        risk["parameter"]
        .replace("_", " ")
        .title()
    )

    source = (
        risk["change_source"]
        .replace("_", " ")
        .title()
    )

    # --------------------------------------------------
    # Recommendations
    # --------------------------------------------------

    recommendations = []

    parameter_lower = risk["parameter"].lower()

    if "mfa" in parameter_lower:

        recommendations = [

            "Re-enable MFA",

            "Review IAM Policies",

            "Audit User Accounts",

            "Run Compliance Scan"

        ]

    elif "cloudtrail" in parameter_lower:

        recommendations = [

            "Restore CloudTrail",

            "Verify Audit Logging",

            "Review Recent Changes",

            "Run Compliance Scan"

        ]

    elif "firewall" in parameter_lower:

        recommendations = [

            "Restore Firewall Rule",

            "Review Network Policies",

            "Verify Access Rules",

            "Run Compliance Scan"

        ]

    elif "encryption" in parameter_lower:

        recommendations = [

            "Restore Encryption Settings",

            "Rotate Encryption Keys",

            "Review Certificates",

            "Run Compliance Scan"

        ]

    else:

        recommendations = [

            "Restore Baseline Configuration",

            "Review Configuration Changes",

            "Verify Administrative Access",

            "Run Compliance Scan"

        ]

    # --------------------------------------------------
    # MITRE Mapping
    # --------------------------------------------------

    technique = "T1562.001"

    if "mfa" in parameter_lower:
        technique = "T1556"

    elif "cloudtrail" in parameter_lower:
        technique = "T1562.001"

    elif "encryption" in parameter_lower:
        technique = "T1557"

    elif "firewall" in parameter_lower:
        technique = "T1562"

    # --------------------------------------------------
    # Build Investigation
    # --------------------------------------------------

    investigation = {

        "confidence": 96,

        "asset": risk["control_id"],

        "incident": risk["event_id"],

        "priority": "P1",

        "rootCause": {

            "source": source,

            "action": parameter,

            "result": risk["status"]

        },

        "businessImpact": {

            "title": "Potential Compliance Violation",

            "estimate": "€2.1M"

        },

        "attackExposure": {

            "technique": technique,

            "confidence": "85%"

        },

        "recommendations": recommendations

    }

    return investigation