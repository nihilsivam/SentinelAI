import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]

DATASET_DIR = BASE_DIR / "datasets"


def load_json(filename):
    file_path = DATASET_DIR / filename

    with open(file_path, "r") as file:
        return json.load(file)


def load_baseline_controls():
    return load_json("baseline_controls.json")


def load_change_events():
    return load_json("change_events.json")


def load_compliance_mapping():
    return load_json("compliance_mapping.json")