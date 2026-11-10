import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Globe2,
  GraduationCap,
  Heart,
  Landmark,
  Mail,
  Scale,
  Target,
  Users,
} from "lucide-react";
import logoImage from "./images/Logo.png";
import founderImage from "./staff/Umulisa.jpeg";

const SITE = "https://rwandacornestone.org";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const highlights = [
  { value: "2009", label: "Founded The Cornerstone" },
  { value: "2", label: "Countries of experience: Rwanda & Switzerland" },
  { value: "PhD", label: "Doctoral researcher, University of Geneva" },
];

const education = [
  {
    icon: GraduationCap,
    level: "Doctoral researcher",
    field: "Political Sociology",
    institution: "University of Geneva, Switzerland",
    current: true,
  },
  {
    icon: GraduationCap,
    level: "Master's degree",
    field: "Social Sciences, specialising in Social Work and Social Policy",
    institution: "University of Fribourg, Switzerland",
  },
  {
    icon: Award,
    level: "Diploma",
    field: "Project Management",
    institution: "CEFCO, Switzerland",
  },
  {
    icon: GraduationCap,
    level: "Bachelor's degree",
    field: "Sociology",
    institution: "National University of Rwanda",
  },
];

const expertise = [
  { icon: Landmark, label: "Social protection" },
  { icon: Globe2, label: "Migration" },
  { icon: Scale, label: "Gender-based violence prevention" },
  { icon: Users, label: "Community development" },
  { icon: Heart, label: "Youth empowerment" },
  { icon: BookOpen, label: "Public policy research" },
];

const researchInterests = [
  "Public policy",
  "State–citizen relations",
  "Institutional experiences of people navigating asylum procedures",
];

export default function Founder() {
  useEffect(() => {
    const title = "Olive Umulisa – Founder & President | The Cornerstone Rwanda";
    const description =
      "Olive Umulisa is the Founder and President of The Cornerstone in Rwanda, a social work professional and doctoral researcher in Political Sociology at the University of Geneva.";

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
        description,
        worksFor: { "@type": "NGO", name: "The Cornerstone", url: SITE },
        affiliation: { "@type": "CollegeOrUniversity", name: "University of Geneva" },
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "University of Fribourg" },
          { "@type": "CollegeOrUniversity", name: "National University of Rwanda" },
        ],
        knowsAbout: [
          "Social work",
          "Social policy",
          "Political sociology",
          "Public policy",
          "State–citizen relations",
          "Asylum procedures",
          "Youth empowerment",
          "Community development",
          "Gender-based violence prevention",
          "Social protection",
          "Migration",
        ],
      },
    });
    document.head.appendChild(ld);

    window.scrollTo(0, 0);
    return () => ld.remove();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f4ee] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#00a1de]/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="/" className="flex min-w-0 items-center gap-3 text-white">
            <img src={logoImage} alt="The Cornerstone logo" className="h-11 w-11 shrink-0" />
            <span className="truncate text-sm font-black tracking-[0.12em] sm:text-lg sm:tracking-[0.18em]">THE CORNERSTONE</span>
          </a>
          <nav className="flex items-center gap-4 text-sm font-semibold text-white sm:gap-6">
            <a href="/#team" className="hidden transition hover:text-[#fcd116] sm:inline">Our Team</a>
            <a href="/#programmes" className="hidden transition hover:text-[#fcd116] sm:inline">Programmes</a>
            <a href="/" className="transition hover:text-[#fcd116]">← Home</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-[#0a3d8f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,161,222,0.55),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(252,209,22,0.18),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#fcd116]/50 bg-[#fcd116]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#fcd116]">
                Founder & President
              </span>
              <h1 className="mt-6 text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">Olive Umulisa</h1>
              <p className="mt-4 text-lg font-semibold text-blue-100 sm:text-xl">
                Social work professional · Doctoral researcher in Political Sociology
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Olive Umulisa is a Rwandan social work professional and the Founder and President of The Cornerstone, a
                non-profit organisation established in Rwanda in 2009. She is also a doctoral researcher in Political
                Sociology at the University of Geneva, Switzerland.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/20 transition hover:bg-[#e7c00f]"
                >
                  <Mail size={16} /> Get in touch
                </a>
                <a
                  href="/#programmes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Our programmes <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mx-auto w-full max-w-sm lg:max-w-none"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-[#fcd116] via-[#00a1de] to-transparent opacity-70 blur-sm" />
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/90 bg-white shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
                  <img
                    src={founderImage}
                    alt="Olive Umulisa, Founder and President of The Cornerstone Rwanda"
                    className="aspect-[4/5] w-full object-cover"
                    style={{ objectPosition: "center top" }}
                    fetchpriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white px-5 py-3 text-center shadow-xl">
                  <p className="text-base font-black text-[#0a3d8f]">Olive Umulisa</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Founder & President</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="relative z-10 mx-auto -mt-0 max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-[1.5rem] border border-[#e2dcd2] bg-white p-6 text-center shadow-[0_18px_50px_rgba(20,43,36,0.06)]"
              >
                <p className="text-4xl font-black text-[#00a1de]">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Profile + Expertise */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Professional Profile</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">
                Bridging community practice, public policy and research.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                With professional experience in Rwanda and Switzerland, Olive has worked in social protection, migration,
                gender-based violence prevention, community development and youth empowerment.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Alongside her leadership of The Cornerstone, she is an emerging researcher in political sociology, with a
                particular interest in public policy, state–citizen relations and the institutional experiences of people
                navigating asylum procedures.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="rounded-[2rem] border border-[#b7d9f7] bg-white p-7 shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
              <h3 className="flex items-center gap-3 text-xl font-black text-[#0a3d8f]">
                <Briefcase size={22} /> Areas of expertise
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {expertise.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 rounded-xl bg-[#edf8ff] px-4 py-3 text-sm font-semibold text-[#0a3d8f]">
                    <Icon size={18} className="shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-[#edf8ff] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Education</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Academic background</h2>
            </motion.div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {education.map(({ icon: Icon, level, field, institution, current }, i) => (
                <motion.div
                  key={level}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-[1.5rem] border bg-white p-6 shadow-sm ${
                    current ? "border-[#00a1de] shadow-[0_18px_50px_rgba(0,161,222,0.18)]" : "border-[#b7d9f7]"
                  }`}
                >
                  {current && (
                    <span className="absolute right-5 top-5 rounded-full bg-[#fcd116] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0a3d8f]">
                      Current
                    </span>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff6ff] text-[#0a3d8f]">
                    <Icon size={22} />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#00a1de]">{level}</p>
                  <h3 className="mt-2 text-xl font-black leading-snug text-[#0a3d8f]">{field}</h3>
                  <p className="mt-2 text-slate-600">{institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="overflow-hidden rounded-[2rem] bg-[#0a3d8f] p-8 text-white shadow-[0_30px_90px_rgba(10,61,143,0.25)] sm:p-12"
          >
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#fcd116]">Research</p>
                <h2 className="mt-4 text-3xl font-black sm:text-4xl">Political Sociology, University of Geneva</h2>
                <p className="mt-5 text-lg leading-8 text-slate-200">
                  As a doctoral researcher, Olive explores how public institutions and citizens relate to one another,
                  and how people experience institutions in contexts of migration and asylum.
                </p>
              </div>
              <ul className="space-y-4">
                {researchInterests.map((item) => (
                  <li key={item} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fcd116] text-[#0a3d8f]">
                      <BookOpen size={16} />
                    </span>
                    <span className="text-lg font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Leadership */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dff6ff] text-[#0a3d8f]">
                <Target size={26} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Leadership & Vision</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">
                Creating opportunities for young people to thrive.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                As the Founder and President of The Cornerstone, Olive is committed to creating opportunities for young
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
              <p className="mt-10 text-3xl font-black tracking-wide text-[#00a1de]">Education – Confidence – Change.</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#00a1de] py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
            <div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">Partner with The Cornerstone</h2>
              <p className="mt-2 max-w-xl text-blue-50">
                Join us in building stronger futures for young people in Rwanda.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg transition hover:bg-[#e7c00f]"
              >
                Support us <ArrowRight size={16} />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f8f4ee]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-black tracking-[0.18em] text-[#0a3d8f]">THE CORNERSTONE</p>
          <p>© {new Date().getFullYear()} The Cornerstone · Education • Confidence • Change</p>
        </div>
      </footer>
    </div>
  );
}