import { Section } from "./Section.jsx";

const GROUPS = [
  {
    title: "Media Partners",
    items: [
      { name: "Star of Mysore", src: "/Spons/starmys.jpeg" },
      { name: "Vijay Karnataka", src: "/Spons/vk.jpeg" },
    ],
  },
  {
    title: "Institutes",
    items: [
      { name: "SDMIMD", src: "/Spons/sdm.jpeg" },
      { name: "JSS", src: "/Spons/jss.jpeg" },
      { name: "NIE", src: "/Spons/nie.jpeg" },
      { name: "VVCE", src: "/Spons/vvce.jpeg" },
    ],
  },
  {
    title: "Organisations",
    items: [
      { name: "BS", src: "/Spons/bs.jpeg" },
      { name: "MFE", src: "/Spons/mfe.jpeg" },
      { name: "MGP", src: "/Spons/mgp.jpeg" },
    ],
  },
];

const LogoCard = ({ name, src }) => {
  return (
    <div className="flex items-center justify-center ">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

const Sponsors = () => {
  return (
    <Section id="sponsors" eyebrow="Partners" title="Sponsors & Partners">
      <div className="mt-8 overflow-hidden">
        <div className="marquee">
          <div className="marquee__track">
            {[...GROUPS, ...GROUPS].map((group, idx) => (
              <div
                key={`${group.title}-${idx}`}
                className="flex flex-col items-center gap-6 pr-16"
              >
                <div className="text-sm font-semibold text-[var(--text)] whitespace-nowrap">
                  {group.title}
                </div>

                <div className="flex items-center gap-4">
                  {group.items.map((item) => (
                    <LogoCard
                      key={`${group.title}-${item.name}-${idx}`}
                      name={item.name}
                      src={item.src}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Sponsors;
