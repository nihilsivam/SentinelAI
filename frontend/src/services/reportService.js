import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export const generateReport = (
  dashboard,
  investigation,
  incidents = []
) => {
  const doc = new jsPDF();

  // ===========================
  // Header
  // ===========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("SentinelAI", 14, 18);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(
    "AI-Powered Security Control Drift & Compliance Intelligence Platform",
    14,
    26
  );

  doc.setDrawColor(0);
  doc.line(14, 30, 196, 30);

  // ===========================
  // Executive Summary
  // ===========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Executive Summary", 14, 42);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  const summary =
    investigation?.recommendations?.[0] ||
    "SentinelAI completed analysis successfully.";

  const wrappedSummary = doc.splitTextToSize(summary, 180);
  doc.text(wrappedSummary, 14, 50);

  // ===========================
  // Dashboard Metrics
  // ===========================

  let y = 70;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Dashboard Metrics", 14, y);

  y += 8;

  autoTable(doc, {
    startY: y,
    head: [["Metric", "Value"]],
    body: dashboard.map((item) => [
      item.title,
      item.value.toString(),
    ]),
    theme: "grid",
    headStyles: {
      fillColor: [37, 99, 235],
    },
  });

  y = doc.lastAutoTable.finalY + 12;

  // ===========================
  // AI Investigation
  // ===========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("AI Investigation", 14, y);

  y += 10;

  doc.setFont("helvetica", "normal");

  doc.text(
    `Confidence : ${investigation.confidence}%`,
    14,
    y
  );

  y += 8;

  doc.text(
    `Priority : ${investigation.priority}`,
    14,
    y
  );

  y += 8;

  doc.text(
    `Root Cause : ${investigation.rootCause.action}`,
    14,
    y
  );

  y += 15;

  // ===========================
  // Recommendations
  // ===========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);

  doc.text("Recommendations", 14, y);

  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  investigation.recommendations.forEach((rec) => {
    const text = doc.splitTextToSize(rec, 170);

    doc.text("•", 14, y);
    doc.text(text, 20, y);

    y += text.length * 6 + 2;
  });

  // ===========================
  // Incident Table
  // ===========================

  if (incidents.length > 0) {
    doc.addPage();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);

    doc.text("Critical Incidents", 14, 18);

    autoTable(doc, {
      startY: 28,

      head: [
        [
          "Control",
          "Severity",
          "Risk",
          "Status",
        ],
      ],

      body: incidents.map((incident) => [
        incident.control,
        incident.severity,
        incident.risk,
        incident.status,
      ]),

      headStyles: {
        fillColor: [220, 38, 38],
      },
    });
  }

  // ===========================
  // Footer
  // ===========================

  const pages = doc.getNumberOfPages();

  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);

    doc.setFontSize(10);

    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      14,
      290
    );

    doc.text(
      `Page ${i} of ${pages}`,
      180,
      290
    );
  }

  doc.save(
    `SentinelAI_Report_${
      new Date().toISOString().split("T")[0]
    }.pdf`
  );
};