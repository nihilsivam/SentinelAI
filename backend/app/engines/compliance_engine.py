def map_compliance(incidents, compliance_mapping):

    compliance_lookup = {}

    for item in compliance_mapping:
        compliance_lookup[item["control_id"]] = item["frameworks"]

    for incident in incidents:

        affected = {
            "NIST": set(),
            "CIS": set(),
            "GDPR": set()
        }

        for event in incident["events"]:

            control = event["control_id"]

            if control in compliance_lookup:

                frameworks = compliance_lookup[control]

                for framework, values in frameworks.items():

                    affected[framework].update(values)

        incident["compliance"] = {
            "NIST": sorted(list(affected["NIST"])),
            "CIS": sorted(list(affected["CIS"])),
            "GDPR": sorted(list(affected["GDPR"]))
        }

    return incidents