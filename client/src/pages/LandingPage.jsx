import { TopNav } from "../Components/TopNav.jsx";
import HeroSection from "../Components/landing/HeroSection.jsx";
import WhySection from "../Components/landing/WhySection.jsx";
import TopicsSection from "../Components/landing/TopicsSection.jsx";
import TimelineSection from "../Components/landing/TimelineSection.jsx";
import ObjectivesSection from "../Components/landing/ObjectivesSection.jsx";
import FaqsSection from "../Components/landing/FaqsSection.jsx";
import FooterSection from "../Components/landing/FooterSection.jsx";
import Participants from "../Components/landing/Participants.jsx";

const LandingPage = () => {
  return (
    <div className="m-1 md:m-2 rounded-2xl overflow-hidden flex flex-col montserrat tracking-tighter bg-(--bg) text-(--text)">
      <TopNav />
      <HeroSection />
      <ObjectivesSection />
      {/* <WhySection /> */}
      <Participants />
      <TopicsSection />
      <TimelineSection />
      <FaqsSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
