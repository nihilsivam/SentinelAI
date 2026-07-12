from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.services.json_loader import (
    load_baseline_controls,
    load_change_events
)

from app.services.pipeline import (
    process_pipeline,
    process_incidents,
    process_dashboard,
    process_ai_summary
)

app = FastAPI(
    title="SentinelAI API",
    description="AI-Powered Security Control Drift & Compliance Intelligence Platform",
    version="1.0.0"
)

# -----------------------------
# CORS Configuration
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Welcome to SentinelAI"
    }


@app.get("/baseline")
def baseline():

    data = load_baseline_controls()

    return {
        "status": "success",
        "count": len(data),
        "data": data
    }


@app.get("/events")
def events():

    data = load_change_events()

    return {
        "status": "success",
        "count": len(data),
        "data": data
    }


@app.get("/risk")
def risk():

    return {
        "status": "success",
        "data": process_pipeline()
    }


@app.get("/incidents")
def incidents():

    return {
        "status": "success",
        "data": process_incidents()
    }


@app.get("/compliance")
def compliance():

    return {
        "status": "success",
        "data": process_incidents()
    }


@app.get("/dashboard")
def dashboard():

    return {
        "status": "success",
        "data": process_dashboard()
    }


@app.get("/ai-summary")
def ai_summary():

    return {
        "status": "success",
        "data": process_ai_summary()
    }