import { TopNav } from "../Components/TopNav.jsx";
import HeroSection from "../Components/landing/HeroSection.jsx";
import TopicsSection from "../Components/landing/TopicsSection.jsx";
import TimelineSection from "../Components/landing/TimelineSection.jsx";
import ObjectivesSection from "../Components/landing/ObjectivesSection.jsx";
import FaqsSection from "../Components/landing/FaqsSection.jsx";
import FooterSection from "../Components/FooterSection.jsx";
import Participants from "../Components/landing/Participants.jsx";
import About from "../Components/landing/About.jsx";
import Sponsors from "../Components/landing/Sponsors.jsx";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      className="overflow-hidden flex flex-col dm-sans bg-[var(--bg)] text-[var(--text)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <TopNav />
      <HeroSection />
      <About />
      <Sponsors />
      <ObjectivesSection />
      <Participants />
      <TopicsSection />
      <TimelineSection />
      <FaqsSection />
      <FooterSection />
    </motion.div>
  );
};

export default LandingPage;
