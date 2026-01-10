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
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 2.0,
          delay: 0.4,
          customeBezier: [0.77, 0, 0.18, 1],
        }}
        className="fixed top-0 left-0 bottom-0 w-[51%] bg-[var(--primary)] z-[100]"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2.0,
          delay: 0.4,
          customeBezier: [0.77, 0, 0.18, 1],
        }}
        className="fixed top-0 right-0 bottom-0 w-[51%] bg-[var(--primary)] z-[100]"
      />

      <div className="overflow-hidden flex flex-col dm-sans bg-[var(--bg)] text-[var(--text)]">
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
      </div>
    </>
  );
};

export default LandingPage;
