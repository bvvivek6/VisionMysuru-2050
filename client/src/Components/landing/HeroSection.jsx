import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://res.cloudinary.com/dqlqxcwqr/image/upload/v1767551010/mysuru2_vsbpnf.jpg"
          alt="Future vision of Mysuru city"
          className="h-full w-full scale-x-[-1] object-cover"
          initial={{ scale: 1.3 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-black/40 to-red-600/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <div className="max-w-2xl text-start">
          <h1 className="flex flex-col gap-2 font-bold oswald uppercase tracking-tighter text-white text-4xl leading-tight md:text-6xl">
            <span className="inline-block w-fit  bg-white px-3  text-[var(--accent)]">
              Vision Mysuru 2050
            </span>
            <span>Build the future of Mysuru</span>
          </h1>

          <p className="mt-6 text-base text-white/85 sm:text-lg">
            A competition for college students, startups, and NGOs to pitch
            high-impact ideas. Get mentorship, recognition, and real pathways to
            implementation.
          </p>

          <div className="mt-25 md:mt-20 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-hover)]"
            >
              Submit your idea
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#timeline"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              View timeline <FiCalendar />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
