"""
Timeline Builder

Converts correlated incidents into a chronological
timeline for the SentinelAI dashboard.
"""


def build_timeline(incidents):

    timeline = []

    for incident in incidents:

        for event in incident["events"]:

            timeline.append({

                "time": event["timestamp"],

                "title": event["parameter"]
                .replace("_", " ")
                .title(),

                "description": (
                    f"{event['changed_by']} changed "
                    f"{event['parameter']}"
                ),

                "severity": event["severity"],

                "status": event["status"],

                "environment": event["environment"],

                "source": event["change_source"]

            })

    timeline.sort(
        key=lambda x: x["time"],
        reverse=True
    )

    return timeline