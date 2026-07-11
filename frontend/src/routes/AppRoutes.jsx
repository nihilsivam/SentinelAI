import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Incidents from "../pages/Incidents/Incidents";
import Assets from "../pages/Assets/Assets";
import Compliance from "../pages/Compliance/Compliance";
import Mitre from "../pages/Mitre/Mitre";
import AIInvestigation from "../pages/AIInvestigation/AIInvestigation";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/incidents"
          element={
            <MainLayout>
              <Incidents />
            </MainLayout>
          }
        />

        <Route
          path="/assets"
          element={
            <MainLayout>
              <Assets />
            </MainLayout>
          }
        />

        <Route
          path="/compliance"
          element={
            <MainLayout>
              <Compliance />
            </MainLayout>
          }
        />

        <Route
          path="/mitre"
          element={
            <MainLayout>
              <Mitre />
            </MainLayout>
          }
        />

        <Route
          path="/ai"
          element={
            <MainLayout>
              <AIInvestigation />
            </MainLayout>
          }
        />

        <Route
          path="/reports"
          element={
            <MainLayout>
              <Reports />
            </MainLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;