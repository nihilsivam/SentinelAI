"""
Compliance Builder

Builds compliance framework cards for
the SentinelAI dashboard.
"""


def build_compliance(compliance_summary):

    frameworks = [

        {
            "name": "NIST CSF 2.0",

            "passed": compliance_summary.get("NIST", 0),

            "failed": max(
                0,
                200 - compliance_summary.get("NIST", 0)
            ),

            "score": round(
                compliance_summary.get("NIST", 0)
                / 200 * 100
            )
        },

        {
            "name": "CIS Controls v8",

            "passed": compliance_summary.get("CIS", 0),

            "failed": max(
                0,
                153 - compliance_summary.get("CIS", 0)
            ),

            "score": round(
                compliance_summary.get("CIS", 0)
                / 153 * 100
            )
        },

        {
            "name": "GDPR",

            "passed": compliance_summary.get("GDPR", 0),

            "failed": max(
                0,
                99 - compliance_summary.get("GDPR", 0)
            ),

            "score": round(
                compliance_summary.get("GDPR", 0)
                / 99 * 100
            )
        }

    ]

    return frameworks