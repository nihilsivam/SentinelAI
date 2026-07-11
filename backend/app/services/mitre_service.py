"""
MITRE ATT&CK Builder

Maps security drift events to MITRE ATT&CK techniques.
"""


def build_mitre(top_risks):

    mappings = {

        "cloudtrail_enabled": {
            "technique": "T1562.001",
            "tactic": "Defense Evasion",
            "name": "Disable or Modify Security Tools"
        },

        "mfa_enabled": {
            "technique": "T1556",
            "tactic": "Credential Access",
            "name": "Modify Authentication Process"
        },

        "firewall_enabled": {
            "technique": "T1562",
            "tactic": "Defense Evasion",
            "name": "Impair Defenses"
        },

        "encryption_enabled": {
            "technique": "T1557",
            "tactic": "Credential Access",
            "name": "Adversary-in-the-Middle"
        }

    }

    matrix = []

    for risk in top_risks:

        parameter = risk["parameter"]

        if parameter in mappings:

            mitre = mappings[parameter]

        else:

            mitre = {

                "technique": "T1078",

                "tactic": "Valid Accounts",

                "name": "Unknown Technique"

            }

        matrix.append({

            "technique": mitre["technique"],

            "tactic": mitre["tactic"],

            "name": mitre["name"],

            "severity": risk["severity"],

            "confidence": "85%",

            "event": risk["event_id"]

        })

    return matrix