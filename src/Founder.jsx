import React, { useEffect } from "react";
import { ArrowRight, GraduationCap, Target, Briefcase } from "lucide-react";
import logoImage from "./images/Logo.png";

const SITE = "https://rwandacornestone.org";

// Optional photo: drop a file named olive-umulisa.jpg (or .jpeg/.png/.webp) in src/images/
// The page works without it (an initials placeholder is shown until then).
const photoModules = import.meta.glob("./images/olive-umulisa.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});
const portrait = Object.values(photoModules)[0];

function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Founder() {
  useEffect(() => {
    const title = "Olive Umulisa – Founder & President | The Cornerstone Rwanda";
    const description =
      "Olive Umulisa is a Rwandan social work professional and the founder of The Cornerstone, a non-profit established in 2009 to empower young people through education, sports and community development.";

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", `${SITE}/founder`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE}/founder`;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: "Olive Umulisa",
        jobTitle: "Founder & President",
        url: `${SITE}/founder`,
        nationality: "Rwandan",
        worksFor: { "@type": "NGO", name: "The Cornerstone", url: SITE },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "National University of Rwanda" },
          { "@type": "CollegeOrUniversity", name: "University of Fribourg" },
        ],
        knowsAbout: [
          "Social work",
          "Social policy",
          "Youth empowerment",
          "Community development",
          "Gender-based violence prevention",
          "Social protection",
        ],
      },
    });
    document.head.appendChild(ld);

    window.scrollTo(0, 0);
    return () => ld.remove();
  }, []);

  const education = [
    "Bachelor's degree in Sociology, National University of Rwanda",
    "Master's degree in Social Sciences, specialising in Social Work and Social Policy, University of Fribourg, Switzerland",
    "Diploma in Project Management, CEFCO, Switzerland",
  ];

  const expertise = [
    "Social protection",
    "Migration",
    "Gender-based violence prevention",
    "Community development",
    "Youth empowerment",
  ];

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#00a1de]/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-3 text-white">
            <img src={logoImage} alt="The Cornerstone logo" className="h-11 w-11 shrink-0" />
            <span className="truncate text-sm font-black tracking-[0.12em] sm:text-lg sm:tracking-[0.18em]">THE CORNERSTONE</span>
          </a>
          <a href="/" className="shrink-0 text-sm font-semibold text-white transition hover:text-[#fcd116]">
            ← Back to home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <figure className="overflow-hidden rounded-[2rem] border border-[#b7d9f7] bg-white p-3 shadow-[0_25px_80px_rgba(10,61,143,0.1)] lg:sticky lg:top-28">
            {portrait ? (
              <img
                src={portrait}
                alt="Olive Umulisa, Founder and President of The Cornerstone Rwanda"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                style={{ objectPosition: "center top" }}
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#00a1de] to-[#0a3d8f]">
                <span className="text-7xl font-black text-white/90">OU</span>
              </div>
            )}
            <figcaption className="px-3 pb-3 pt-4 text-center">
              <p className="text-xl font-black text-[#0a3d8f]">Olive Umulisa</p>
              <p className="text-sm font-semibold text-slate-500">Founder & President</p>
            </figcaption>
          </figure>

          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Founder & President | The Cornerstone</p>
            <h1 className="mt-3 text-4xl font-black text-[#0a3d8f] sm:text-5xl">Olive Umulisa</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Olive Umulisa is a Rwandan social work professional and the Founder and President of The Cornerstone, a
              non-profit organisation established in Rwanda in 2009.
            </p>

            <section className="mt-10">
              <h2 className="flex items-center gap-3 text-2xl font-black text-[#0a3d8f]">
                <GraduationCap size={26} /> Education & Professional Background
              </h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {education.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#00a1de]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                She has professional experience in Rwanda and Switzerland, working in social protection, migration,
                gender-based violence prevention, community development and youth empowerment.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="flex items-center gap-3 text-2xl font-black text-[#0a3d8f]">
                <Briefcase size={26} /> Areas of Expertise
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <span key={item} className="rounded-full border border-[#b7d9f7] bg-white px-4 py-2 text-sm font-semibold text-[#0a3d8f]">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="flex items-center gap-3 text-2xl font-black text-[#0a3d8f]">
                <Target size={26} /> Leadership & Vision
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                As the Founder and President of The Cornerstone, she is committed to creating opportunities for young
                people through education, sports and community development.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Under her leadership, The Cornerstone develops initiatives that promote self-confidence, discipline,
                personal growth and leadership among young people.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                She believes that empowering young people with the right opportunities and support can contribute to
                lasting positive change in their communities.
              </p>
              <p className="mt-8 text-2xl font-black tracking-wide text-[#00a1de]">Education – Confidence – Change.</p>
            </section>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#programmes"
                className="inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/15 transition hover:bg-[#e7c00f]"
              >
                Discover our programmes <ArrowRight size={16} />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a3d8f]/30 px-6 py-3 font-semibold text-[#0a3d8f] transition hover:bg-white"
              >
                Contact us
              </a>
            </div>
          </article>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 sm:px-6">
          © {new Date().getFullYear()} The Cornerstone · Education • Confidence • Change
        </div>
      </footer>
    </div>
  );
}
