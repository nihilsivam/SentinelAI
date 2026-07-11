import json
from pathlib import Path

# Project Root
BASE_DIR = Path(__file__).resolve().parents[3]

DATASET_DIR = BASE_DIR / "datasets"


def load_baseline_controls():
    file_path = DATASET_DIR / "baseline_controls.json"

    with open(file_path, "r") as file:
        return json.load(file)


def load_change_events():
    file_path = DATASET_DIR / "change_events.json"

    with open(file_path, "r") as file:
        return json.load(file)