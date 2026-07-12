<div align="center">

# 🛡️ NexÉlanAI

### AI-Powered Security Control Drift & Compliance Intelligence Platform

[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![MIT License](https://img.shields.io/badge/License-Hackathon-blue.svg)]()

An intelligent Security Operations Center (SOC) platform that detects, correlates, prioritizes, and investigates security control drifts using AI-driven insights, compliance mapping, and MITRE ATT&CK intelligence.

---

</div>

# 📖 Overview

Modern enterprises generate thousands of security configuration changes every day. Identifying which changes are legitimate and which introduce security risks is a major challenge for SOC analysts.

**NexÉlanAI** addresses this challenge by providing a centralized platform that:

- Detects security control drifts
- Correlates related security events
- Calculates incident risk scores
- Maps incidents to compliance frameworks
- Aligns attacks with MITRE ATT&CK
- Generates AI-assisted investigations
- Produces executive security reports

The platform helps security teams reduce alert fatigue while improving incident response and compliance visibility.

---

# 🚀 Key Features

## 📊 Security Dashboard

- Enterprise Security Score
- Compliance Score
- Active Drift Monitoring
- Critical Incident Tracking
- Interactive Risk Distribution Charts
- Executive Security Overview

---

## 🚨 Incident Management

- Intelligent Incident Correlation
- Priority Classification (P1 / P2 / P3)
- Search & Filtering
- Incident Details View
- Timeline Analysis
- Risk Assessment

---

## 🛡 Compliance Intelligence

Supports multiple industry standards:

- NIST SP 800-53
- CIS Controls v8
- GDPR

Features:

- Compliance Mapping
- Compliance Impact Analysis
- Framework Coverage
- Security Posture Monitoring

---

## ⚔ MITRE ATT&CK Integration

- ATT&CK Tactics Mapping
- ATT&CK Techniques
- Threat Intelligence View
- Attack Surface Visualization

---

## 🤖 AI Investigation

AI-assisted investigation engine capable of generating:

- Executive Summary
- Root Cause Analysis
- Business Impact
- Risk Assessment
- Actionable Recommendations
- Investigation Confidence

---

## 📄 Executive Reports

Generate professional PDF reports containing:

- Dashboard Metrics
- Incident Summary
- AI Investigation
- Risk Analysis
- Compliance Summary
- Recommendations

---

## ⚙ Settings

- Dashboard Preferences
- Notification Settings
- Theme Configuration
- User Preferences

---

# 🏗 System Architecture

```text
                           CSV Security Dataset
                                     │
                                     ▼
                           CSV Loader Service
                                     │
                                     ▼
                           Risk Calculation Engine
                                     │
                                     ▼
                        Incident Correlation Engine
                                     │
             ┌───────────────────────┼────────────────────────┐
             ▼                       ▼                        ▼
      Compliance Engine        MITRE Engine          AI Investigation
             │                       │                        │
             └───────────────────────┼────────────────────────┘
                                     ▼
                           FastAPI REST Backend
                                     │
                             REST API Endpoints
                                     │
                                     ▼
                             React Frontend
                                     │
 ┌──────────────┬──────────────┬──────────────┬──────────────┐
 │ Dashboard    │ Incidents    │ Compliance   │ Reports      │
 └──────────────┴──────────────┴──────────────┴──────────────┘
```

---

# 🛠 Technology Stack

## Frontend

- React.js
- Axios
- Recharts
- CSS3
- jsPDF

---

## Backend

- Python
- FastAPI
- Pandas
- Uvicorn

---

## Security Standards

- MITRE ATT&CK
- NIST SP 800-53
- CIS Controls v8
- GDPR

---

# 📂 Project Structure

```text
NexÉlanAI
│
├── backend
│   ├── app
│   │   ├── ai
│   │   ├── engines
│   │   ├── services
│   │   ├── models
│   │   └── utils
│   │
│   ├── datasets
│   ├── main.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── data
│   │   └── assets
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 📊 Platform Modules

- 📈 Dashboard
- 🚨 Incident Management
- 🖥 Asset Inventory
- 🛡 Compliance Dashboard
- ⚔ MITRE ATT&CK
- 🤖 AI Investigation
- 📄 Reports
- ⚙ Settings

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/nihilsivam/SentinelAI.git

cd SentinelAI
```

---

## Backend Setup

```bash
cd backend

python -m venv venv
```

### Activate Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Backend

```bash
python -m uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔄 Workflow

```text
Security Dataset
       │
       ▼
CSV Loader
       │
       ▼
Risk Engine
       │
       ▼
Incident Correlation
       │
       ▼
Compliance Mapping
       │
       ▼
MITRE ATT&CK Mapping
       │
       ▼
AI Investigation
       │
       ▼
Dashboard Visualization
       │
       ▼
Executive PDF Reports
```

---

# 🎯 Project Highlights

- AI-assisted Security Investigation
- Enterprise SOC Dashboard
- Incident Correlation Engine
- Compliance Intelligence
- MITRE ATT&CK Integration
- Executive PDF Reports
- Interactive Analytics
- Modular FastAPI Backend
- Modern React Frontend

---

# 📈 Future Enhancements

- SIEM Integration
- Microsoft Sentinel Integration
- Splunk Integration
- CrowdStrike Integration
- Google Gemini / OpenAI Integration
- Live Threat Intelligence Feeds
- WebSocket Real-Time Monitoring
- Multi-Tenant Support
- RBAC Authentication
- Kubernetes Deployment
- Cloud Deployment (Azure / AWS)

---

# 👥 Team

## **Team NexÉlan**

Developed as part of an AI & Cybersecurity Hackathon.

---

# 📸 Screenshots

> Add screenshots of the following pages here:

- Dashboard
- Incidents
- Compliance
- MITRE ATT&CK
- AI Investigation
- Reports

---

# 📜 License

This project was developed for educational and hackathon purposes.

---

<div align="center">

## ⭐ If you found this project interesting, consider giving it a star!

**Built with ❤️ by Team NexÉlan**

</div>
