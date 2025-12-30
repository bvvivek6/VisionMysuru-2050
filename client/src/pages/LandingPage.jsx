import { TopNav } from "../Components/TopNav.jsx";
import HeroSection from "../Components/landing/HeroSection.jsx";
import WhySection from "../Components/landing/WhySection.jsx";
import TopicsSection from "../Components/landing/TopicsSection.jsx";
import TimelineSection from "../Components/landing/TimelineSection.jsx";
import ObjectivesSection from "../Components/landing/ObjectivesSection.jsx";
import FaqsSection from "../Components/landing/FaqsSection.jsx";
import MysuruSection from "../Components/landing/MysuruSection.jsx";
import FooterSection from "../Components/landing/FooterSection.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-dvh dm-sans bg-[var(--bg)] text-[var(--text)]">
      <TopNav />
      <main>
        <HeroSection />
        <WhySection />
        <TopicsSection />
        <TimelineSection />
        <ObjectivesSection />
        <FaqsSection />
        <MysuruSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default LandingPage;
