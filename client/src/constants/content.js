import {
  FiCompass,
  FiCpu,
  FiFeather,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const TOPICS = [
  {
    icon: FiMapPin,
    title: "Urban Infrastructure & Mobility",
    points: [
      "Public transport & last-mile connectivity",
      "Traffic, walkability & road safety",
      "Core civic infrastructure upgrades",
    ],
  },
  {
    icon: FiGlobe,
    title: "Environmental Sustainability",
    points: [
      "Water, waste & circular economy",
      "Urban greenery & biodiversity",
      "Clean energy & low-carbon solutions",
    ],
  },
  {
    icon: FiUsers,
    title: "Economic Development",
    points: [
      "Jobs, skills & entrepreneurship",
      "MSME growth & innovation ecosystems",
      "Investment, productivity & livelihoods",
    ],
  },
  {
    icon: FiCpu,
    title: "Digital Governance & Smart City",
    points: [
      "Citizen services & e-governance",
      "Data-driven operations & transparency",
      "Smart infrastructure & platforms",
    ],
  },
  {
    icon: FiLayers,
    title: "Education & Healthcare",
    points: [
      "Quality education & skilling pathways",
      "Public health, prevention & access",
      "Wellbeing & care delivery innovation",
    ],
  },
  {
    icon: FiFeather,
    title: "Heritage Conservation",
    points: [
      "Protect and restore heritage assets",
      "Heritage-sensitive urban development",
      "Community stewardship & awareness",
    ],
  },
  {
    icon: FiUsers,
    title: "Social Equity & Inclusion",
    points: [
      "Accessible public spaces and services",
      "Support for vulnerable communities",
      "Inclusive opportunities for all",
    ],
  },
  {
    icon: FiTarget,
    title: "Disaster Resilience",
    points: [
      "Flood/heat preparedness",
      "Early warning & response systems",
      "Resilient infrastructure planning",
    ],
  },
  {
    icon: FiCompass,
    title: "Tourism & Culture",
    points: [
      "Tourism experiences, trails & events",
      "Creative economy and local identity",
      "Sustainable visitor management",
    ],
  },
];

const TIMELINE = [
  {
    title: "Registration Opens",
    date: "Feb 01, 2026",
    detail: "Registrations open for Mysuru Vision 2050.",
  },
  {
    title: "Submission Deadline",
    date: "Feb 20, 2026",
    detail: "Last date to submit your idea.",
  },
  {
    title: "The Elimination Round",
    date: "Feb 21, 2026",
    detail: "Shortlisted teams present for elimination round evaluation.",
  },
  {
    title: "The Corporate Summit",
    date: "Feb 22, 2026",
    detail: "Engage with industry leaders and mentors at the summit.",
  },
  {
    title: "The Grand Conclave & Handover",
    date: "Feb 23, 2026",
    detail: "Final conclave and formal handover of outcomes.",
  },
];

const CATEGORY = {
  STUDENT: "student",
  STARTUP: "startup",
  NGO: "ngo",
};

const TOPIC_OPTIONS = [
  "Smart & Sustainable City",
  "Environment & Climate Resilience",
  "Inclusive Growth & Livelihoods",
  "Culture, Tourism & Heritage",
  "Health, Education & Wellbeing",
  "Rural–Urban Linkages",
];

const CORE_OBJECTIVES = [
  {
    title: 'To Create a Neutral "Think-Tank"',
    desc: "Create a non-partisan platform where academia, industry, and government collaborate on Mysuru’s long-term urban challenges.",
    outcome:
      "Enables informed dialogue, shared understanding, and research-backed policy inputs.",
  },
  {
    title: "To Bridge the Civic Data Gap",
    desc: "Engage students to capture granular, hyper-local civic data often missed by conventional surveys.",
    outcome:
      "Builds a living data layer reflecting real conditions across neighbourhoods.",
  },
  {
    title: "To Foster Safe and Responsible Innovation",
    desc: "Provide a controlled environment to test bold ideas, technologies, and new approaches before deployment.",
    outcome:
      "Encourages experimentation while reducing real-world implementation risk.",
  },
  {
    title: "To Institutionalise the Future",
    desc: "Convert validated insights and proposals into a formal, institutionally recognised white paper.",
    outcome: "Ensures continuity, accountability, and long-term civic impact.",
  },
];

const TEAM_COMPOSITION = [
  "2 to 3 members per team",
  "Students or recognised entities based in Mysuru",
  "Inter-college / institution teams permitted",
];

const CHALLENGE_FORMAT = [
  {
    title: "The Photo",
    desc: "Geotagged photo of a real civic issue.",
  },
  {
    title: "The Solution",
    desc: "Concise abstract (max 100 words).",
  },
  {
    title: "The Pitch",
    desc: "3-minute roadmap for shortlisted teams.",
  },
];

const DISQUALIFICATION = [
  "Plagiarised ideas",
  "Stock or AI-generated images",
  "Late submissions",
];

export {
  TOPICS,
  TIMELINE,
  CATEGORY,
  TOPIC_OPTIONS,
  CORE_OBJECTIVES,
  TEAM_COMPOSITION,
  CHALLENGE_FORMAT,
  DISQUALIFICATION,
};
