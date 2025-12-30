import {
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiChevronDown,
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
    icon: FiCpu,
    title: "Smart & Sustainable City",
    points: [
      "Mobility, traffic, public safety",
      "Energy efficiency, waste, water",
      "Citizen services & e-governance",
    ],
  },
  {
    icon: FiGlobe,
    title: "Environment & Climate Resilience",
    points: [
      "Urban greenery, lake rejuvenation",
      "Flood/heat preparedness",
      "Low-carbon solutions",
    ],
  },
  {
    icon: FiUsers,
    title: "Inclusive Growth & Livelihoods",
    points: [
      "Skill development & jobs",
      "Women/youth empowerment",
      "Accessible public spaces",
    ],
  },
  {
    icon: FiFeather,
    title: "Culture, Tourism & Heritage",
    points: [
      "Heritage-led development",
      "Tourism experiences & trails",
      "Creative economy",
    ],
  },
  {
    icon: FiLayers,
    title: "Health, Education & Wellbeing",
    points: [
      "Preventive health & outreach",
      "EdTech & skilling pathways",
      "Mental health & sports",
    ],
  },
  {
    icon: FiCompass,
    title: "Rural–Urban Linkages",
    points: [
      "Agri value chains",
      "Local entrepreneurship",
      "Last-mile logistics",
    ],
  },
];

const TIMELINE = [
  {
    title: "Registrations Open",
    date: "Jan 10, 2026",
    detail: "Choose a track and submit your intent to participate.",
  },
  {
    title: "Idea Submission",
    date: "Jan 10 – Feb 10, 2026",
    detail: "Submit your problem statement, solution, and impact plan.",
  },
  {
    title: "Shortlisting",
    date: "Feb 12 – Feb 18, 2026",
    detail: "Evaluation by domain experts and district officials.",
  },
  {
    title: "Mentorship Sprint",
    date: "Feb 20 – Mar 01, 2026",
    detail: "Refine your pitch deck, prototype, and execution roadmap.",
  },
  {
    title: "Demo Day (District Finals)",
    date: "Mar 07, 2026",
    detail: "Pitch to jury, officials, and partners; win prizes and funding.",
  },
];
export { TOPICS, TIMELINE };
