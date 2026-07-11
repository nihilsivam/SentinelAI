from fastapi import FastAPI

from app.services.json_loader import (
    load_baseline_controls,
    load_change_events
)

from app.services.pipeline import (
    process_pipeline,
    process_incidents
)

app = FastAPI(
    title="SentinelAI API",
    description="AI-Powered Security Control Drift & Compliance Intelligence Platform",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Welcome to SentinelAI"
    }


@app.get("/baseline")
def baseline():
    return {
        "status": "success",
        "count": len(load_baseline_controls()),
        "data": load_baseline_controls()
    }


@app.get("/events")
def events():
    return {
        "status": "success",
        "count": len(load_change_events()),
        "data": load_change_events()
    }


@app.get("/pipeline")
def pipeline():

    data = process_pipeline()

    return {
        "status": "success",
        "count": len(data),
        "data": data
    }


@app.get("/risk")
def risk():

    data = process_pipeline()

    return {
        "status": "success",
        "count": len(data),
        "data": data
    }


@app.get("/incidents")
def incidents():

    data = process_incidents()

    return {
        "status": "success",
        "count": len(data),
        "data": data
    }