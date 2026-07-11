export const investigation = {
  confidence: 96,

  asset: "PROD-FW-PARIS-01",

  incident: "INC-4821",

  priority: "P1",

  rootCause: {
    source: "Deployment Pipeline",
    action: "Modified Firewall Rule",
    result: "Disabled Enforcement",
  },

  businessImpact: {
    title: "Potential PCI-DSS Violation",
    estimate: "€2.1M",
  },

  attackExposure: {
    technique: "T1562.001",
    confidence: "85%",
  },

  recommendations: [
    "Restore Firewall Rule",
    "Enable MFA",
    "Restart CloudTrail",
    "Run Compliance Scan",
  ],
};