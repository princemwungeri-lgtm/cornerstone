import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import ProjectsPage from "./Projects.jsx";
import Founder from "./Founder.jsx";
import { leadership, ethicsCommittee, advisoryCouncil, initials } from "./teamData.js";
import heroImage from "./images/heroImage.jpeg";
import logoImage from "./images/Logo.png";
import resourceImage from "./images/image.jpeg";
import cornerstoneBook from "./images/cornerstone-youth-guide.pdf";
import bandImage from "./images/karate4.jpeg";
import bandeImage from "./images/karate2.jpeg";
import cameraImage from "./images/karate3.jpeg";
import cateringImage from "./images/karate1.jpeg";
import danceImage from "./images/karate7.jpeg";
import decorationImage from "./images/karate6.jpeg";
import liveImage from "./images/karate5.jpeg";
import makeupImage from "./images/karate4.jpeg";
import photoImage from "./images/karate3.jpeg";
import soundImage from "./images/karate2.jpeg";
import websiteImage from "./images/karate1.jpeg";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Globe2,
  GraduationCap,
  HandCoins,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Social media – paste the official page URLs here.                   */
/* Icons with an empty href are hidden automatically.                  */
/* ------------------------------------------------------------------ */
const socialLinks = [
  { label: "Facebook", href: "", Icon: Globe2 },
  { label: "Instagram", href: "", Icon: Users },
  { label: "LinkedIn", href: "", Icon: Briefcase },
  { label: "YouTube", href: "", Icon: GraduationCap },
];

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Our Team", "#team"],
  ["Founder", "/founder"],
  ["Vision & Mission", "#vision"],
  ["Programmes", "#programmes"],
  ["Projects", "/projects"],
  ["Impact", "#impact"],
  ["Governance", "#governance"],
  ["Support", "#get-involved"],
  ["Contact", "#contact"],
];

const stats = [
  { value: "2009", label: "Established" },
  { value: "Rwanda", label: "National reach" },
  { value: "Youth", label: "Primary focus" },
  { value: "Trust", label: "Community-first approach" },
];

const values = [
  { icon: Heart, title: "Trust", text: "A family-oriented environment where young people feel safe, heard and respected." },
  { icon: Users, title: "Participation", text: "Inclusive engagement that gives youth a voice in decisions and activities." },
  { icon: ShieldCheck, title: "Protection", text: "Support that promotes well-being, responsible choices and healthy relationships." },
  { icon: GraduationCap, title: "Growth", text: "Education, skills, leadership and entrepreneurship designed for long-term empowerment." },
];

const programmes = [
  {
    title: "Momentum",
    summary:
      "A youth empowerment initiative using karate, Rwandan culture and community engagement to build discipline, resilience and social cohesion.",
    details: ["Karate sessions", "Holiday camps", "Family and community engagement", "Mentor development"],
    accent: "from-sky-400 to-cyan-600",
  },
  {
    title: "Train with Elites (TWE)",
    summary:
      "A school-based sports and youth development programme that strengthens academic engagement, wellbeing, confidence and prevention of school drop-out.",
    details: ["Elite karate coaching", "Girls’ participation", "School-based support", "Well-being and discipline"],
    accent: "from-[#fcd116] to-[#d9a800]",
  },
  {
    title: "Skills & Enterprise",
    summary:
      "Youth-focused vocational and entrepreneurship support that develops employability and socio-economic autonomy.",
    details: ["Leather processing", "Shoe making", "Entrepreneurship support", "Start-up guidance"],
    accent: "from-green-500 to-green-600",
  },
];

const governance = [
  "General Assembly",
  "Executive Committee",
  "Conflict Resolution, Complaints and Ethics Committee",
  "Audit and Oversight Committee",
  "Advisory Council",
];

const partners = [
  "Schools & Communities",
  "Public Institutions",
  "Civil Society",
  "International Partners",
  "Youth Networks",
  "Local Volunteers",
];

const newsItems = [
  { title: "Youth leadership and mentorship workshops", date: "May 2026" },
  { title: "Community-based prevention and culture activities", date: "June 2026" },
  { title: "School outreach and talent development programmes", date: "July 2026" },
];

const galleryImages = [
  { src: bandImage, title: "Karate discipline training", category: "Focus & technique" },
  { src: bandeImage, title: "Team warm-up session", category: "Unity & readiness" },
  { src: cameraImage, title: "Youth moments in action", category: "Training highlights" },
  { src: cateringImage, title: "Rising with dignity", category: "Care & togetherness" },
  { src: danceImage, title: "Cultural celebration", category: "Heritage & rhythm" },
  { src: decorationImage, title: "Dojo spirit and pride", category: "Identity & belonging" },
  { src: liveImage, title: "Live karate showcase", category: "Performance & confidence" },
  { src: makeupImage, title: "Confidence and presentation", category: "Youth empowerment" },
  { src: photoImage, title: "Portraits of resilience", category: "Growth & determination" },
  { src: soundImage, title: "Training energy & motivation", category: "Discipline & focus" },
  { src: websiteImage, title: "Community outreach campaign", category: "Awareness & engagement" },
];

const shoeImageModules = import.meta.glob("./immage/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
});

const shoeMakingImages = Object.entries(shoeImageModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src], index) => ({
    src,
    title: `Shoe making project ${String(index + 1).padStart(2, "0")}`,
    fileName: path.split("/").pop(),
  }));

const learnMoreContent = {
  overview: {
    title: "About The Cornerstone",
    text:
      "The Cornerstone is a national, youth-focused organisation that promotes empowerment, protection, participation, and community wellbeing for adolescents and young people in Rwanda.",
    points: [
      "Established in 2009 and rooted in community action.",
      "Works through education, mentoring, prevention, culture, sport and skills development.",
      "Helps young people become confident, resilient and responsible citizens.",
    ],
  },
  programmes: {
    title: "Our programmes",
    text:
      "The organisation supports young people through structured programmes designed for personal growth, leadership, and sustainable opportunity.",
    points: [
      "Momentum: youth empowerment through karate, culture and community engagement.",
      "Train with Elites: school-based development and wellbeing support.",
      "Skills & Enterprise: vocational and entrepreneurship pathways.",
    ],
  },
};

const EMAILJS_SERVICE_ID = "service_123"; // TODO: replace with the real EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_wdvj3nd";
const EMAILJS_PUBLIC_KEY = "uUCAKnDwkmiFGcxhD";

const seoContent = {
  title: "The Cornerstone Rwanda | Youth Development, Education & Community Impact",
  description:
    "The Cornerstone is a youth-focused non-profit in Kigali, Rwanda, founded in 2009 by Olive Umulisa. Education, mentoring, skills, sport and culture for young people.",
  canonical: "https://rwandacornestone.org/",
};

function SocialIcons({ className = "" }) {
  const active = socialLinks.filter((s) => s.href);
  if (active.length === 0) return null;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {active.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`The Cornerstone on ${label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a3d8f] text-white transition hover:bg-[#00a1de]"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

function MemberAvatar({ name, size = "h-20 w-20 text-2xl" }) {
  return (
    <div
      className={`flex ${size} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00a1de] to-[#0a3d8f] font-black text-white shadow-md`}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const nextSlide = () => setActiveSlide((current) => (current + 1) % galleryImages.length);
  const prevSlide = () => setActiveSlide((current) => (current - 1 + galleryImages.length) % galleryImages.length);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setToast(null);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS configuration is missing. Please add your service ID, template ID, and public key.");
      }

      const templateParams = {
        full_name: formData.full_name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "rwandacornerstone@gmail.com",
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, { publicKey: EMAILJS_PUBLIC_KEY });

      setFormData({ full_name: "", email: "", subject: "", message: "" });
      setToast({ type: "success", text: "Your message has been sent successfully." });
    } catch (error) {
      console.error("EmailJS send error:", error);
      setToast({
        type: "error",
        text: "Your message could not be sent. Please try again, or contact rwandacornestone@gmail.com directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  /* SEO tags for the home page only (Founder sets its own) */
  useEffect(() => {
    if (path !== "/") return;
    document.title = seoContent.title;

    const setMeta = (selector, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const attr = selector.startsWith("meta[property=") ? "property" : "name";
        const key = selector.match(/(?:name|property)="([^"]+)"/)[1];
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', seoContent.description);
    setMeta('meta[property="og:title"]', seoContent.title);
    setMeta('meta[property="og:description"]', seoContent.description);
    setMeta('meta[property="og:url"]', seoContent.canonical);
    setMeta('meta[property="og:site_name"]', "The Cornerstone");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seoContent.canonical;
  }, [path]);

  useEffect(() => {
    if (!toast) return;
    const timeoutId = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timeoutId);
  }, [toast]);

  useEffect(() => {
    if (path !== "/") return;
    const intervalId = setInterval(() => {
      setActiveSlide((current) => (current + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [path]);

  if (path === "/projects") return <ProjectsPage />;
  if (path === "/founder") return <Founder />;

  return (
    <div className="min-h-screen bg-[#00a1de] text-slate-800">
      <AnimatePresence>
        {modalInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex  justify-center bg-slate-950/70 p-8 py-12"
            onClick={() => setModalInfo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-[#dfeaf9] bg-white p-6 shadow-[0_35px_100px_rgba(15,23,42,0.25)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Learn more</p>
                  <h3 className="mt-3 text-2xl font-black text-[#0a3d8f]">{modalInfo.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalInfo(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700"
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>

              <p className="mt-5 text-base leading-8 text-slate-600">{modalInfo.text}</p>

              <ul className="mt-5 space-y-3 text-slate-700">
                {modalInfo.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#00a1de]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {toast && (
        <div className="pointer-events-none fixed right-4 top-24 z-[60] w-[min(92vw,360px)]">
          <div
            className={`rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-md ${
              toast.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                  toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {toast.type === "success" ? "✓" : "!"}
              </div>
              <p className="text-sm font-medium leading-6">{toast.text}</p>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#00a1de]/90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center justify-between gap-4 py-3">
            <a href="/" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden text-white sm:h-12 sm:w-12">
                <img src={logoImage} alt="The Cornerstone logo" className="h-full w-full" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-black tracking-[0.12em] text-white sm:text-lg sm:tracking-[0.18em]">THE CORNERSTONE</p>
                <p className="hidden text-[9px] uppercase tracking-[0.32em] text-blue-50 sm:block">Education • Confidence • Change</p>
              </div>
            </a>

            <nav aria-label="Main navigation" className="hidden items-center gap-4 text-sm font-medium text-white xl:flex 2xl:gap-6">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-[#fcd116]">
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#get-involved"
                className="hidden items-center gap-2 rounded-full bg-[#fcd116] px-5 py-2.5 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/15 transition hover:bg-[#e7c00f] xl:inline-flex"
              >
                Support Us
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="shrink-0 rounded-full border border-white/50 p-2 text-white xl:hidden"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/20 bg-[#00a1de] xl:hidden">
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-5">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative isolate overflow-hidden bg-[#0a3d8f] text-white">
          <img
            src={heroImage}
            alt="Young people participating in community activities in Rwanda"
            className="absolute inset-0 h-full w-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,161,222,0.92)_0%,rgba(0,61,133,0.8)_35%,rgba(0,61,133,0.62)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-emerald-200"
            >
              <Sparkles size={12} />
              National • non-profit • public-interest organisation
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-8 max-w-5xl"
            >
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                Empowering Rwanda’s youth to rise with confidence, purpose and resilience.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                The Cornerstone works to empower adolescents and young people through prevention, education, mentoring, skills development, sport, culture and community engagement in a trusted environment of expression and participation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-7 py-3.5 font-semibold text-[#173d38] shadow-lg shadow-yellow-900/20 transition hover:bg-[#e7c00f]"
              >
                Explore Programmes
                <ArrowRight size={18} />
              </a>
              <button
                type="button"
                onClick={() => setModalInfo(learnMoreContent.overview)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/10"
              >
                Learn More
              </button>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin size={16} className="text-emerald-300" />
                Kigali, Rwanda
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Building2 size={16} className="text-emerald-300" />
                New headquarters in Kanombe
              </div>
            </div>
          </div>

          <div id="impact" className="relative mx-auto max-w-7xl scroll-mt-24 border-t border-white/10 px-4 pb-8 sm:px-6 lg:px-8">
            <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-3xl font-black text-[#fcd116]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">About The Cornerstone</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">
                A trusted place where young people grow into confident, capable and responsible citizens.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-100">
                The Cornerstone was established in November 2009 by <a href="/founder" className="font-bold underline decoration-[#fcd116] underline-offset-4 hover:text-[#fcd116]">Olive Umulisa</a> and has grown to become a national non-governmental organisation committed to the empowerment of adolescents and young people in Rwanda. Our programmes combine prevention, education, mentoring, skills development, sport, culture and community engagement to create lasting positive change.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-100">
                We work with families, schools, communities and public institutions to strengthen youth wellbeing, dignity and opportunity while promoting inclusion, social cohesion and responsible life choices.
              </p>
              <a
                href="/founder"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/15 transition hover:bg-[#e7c00f]"
              >
                Meet our founder <ArrowRight size={16} />
              </a>
            </div>

            <div className="rounded-[2rem] border border-[#dfe6df] bg-white p-6 shadow-[0_25px_80px_rgba(20,43,36,0.08)]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={heroImage}
                  alt="Youth development session organised by The Cornerstone"
                  loading="lazy"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TEAM – all 19 official members */}
        <section id="team" className="scroll-mt-20 bg-[#f8f4ee] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Our Team</p>
                <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Meet the people behind The Cornerstone.</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-slate-600">
                An executive committee, an ethics committee and an advisory council bring leadership, accountability, youth protection and strong partnerships together.
              </p>
            </div>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Executive Committee</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {leadership.map((member, index) => {
                const Wrapper = member.href ? "a" : "div";
                return (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.06 }}
                    className="group rounded-[1.5rem] border border-[#e2dcd2] bg-white shadow-[0_18px_50px_rgba(20,43,36,0.06)] transition hover:-translate-y-1 hover:border-[#8fc6f3]"
                  >
                    <Wrapper {...(member.href ? { href: member.href } : {})} className="block p-6">
                      <div className="flex items-center justify-between">
                        <MemberAvatar name={member.name} />
                        <span className="text-xs font-black tracking-[0.2em] text-[#00a1de]">{member.n}</span>
                      </div>
                      <h4 className="mt-6 text-xl font-black leading-tight text-[#0a3d8f]">{member.name}</h4>
                      <p className="mt-2 text-sm font-semibold text-slate-700">{member.role}</p>
                      <p className="mt-1 text-xs text-slate-500">{member.fr}</p>
                      {member.href && (
                        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0a3d8f] group-hover:text-[#00a1de]">
                          Read her story <ArrowRight size={14} />
                        </p>
                      )}
                    </Wrapper>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#e2dcd2] bg-white p-6 shadow-[0_18px_50px_rgba(20,43,36,0.06)]">
                <div className="flex items-center gap-3 text-[#0a3d8f]">
                  <ShieldCheck size={24} />
                  <h3 className="text-xl font-black">Complaints & Ethics Committee</h3>
                </div>
                <p className="mt-1 text-xs text-slate-500">Comité Conflits, Plaintes & Éthique</p>
                <ul className="mt-5 space-y-3">
                  {ethicsCommittee.map((member) => (
                    <li key={member.name} className="flex items-center gap-3">
                      <MemberAvatar name={member.name} size="h-10 w-10 text-sm" />
                      <span className="flex-1 font-semibold text-slate-700">{member.name}</span>
                      <span className="text-xs font-black tracking-[0.2em] text-[#00a1de]">{member.n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[#e2dcd2] bg-white p-6 shadow-[0_18px_50px_rgba(20,43,36,0.06)]">
                <div className="flex items-center gap-3 text-[#0a3d8f]">
                  <Briefcase size={24} />
                  <h3 className="text-xl font-black">Advisory Council</h3>
                </div>
                <p className="mt-1 text-xs text-slate-500">Conseil Consultatif</p>
                <ul className="mt-5 space-y-3">
                  {advisoryCouncil.map((member) => (
                    <li key={member.name} className="flex items-center gap-3">
                      <MemberAvatar name={member.name} size="h-10 w-10 text-sm" />
                      <span className="flex-1 font-semibold text-slate-700">{member.name}</span>
                      <span className="text-xs font-black tracking-[0.2em] text-[#00a1de]">{member.n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCE LIBRARY */}
        <section className="bg-[#edf8ff] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#b7d9f7] bg-white shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
              <img
                src={resourceImage}
                alt="Young people learning and engaging in community programmes"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="rounded-[2rem] border border-[#b7d9f7] bg-white p-8 shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Resource Library</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">A practical guide for learning, growth and community action.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Explore our book and resource materials designed to support youth empowerment, mentorship, safe participation and sustainable community development.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] border border-dashed border-[#8fc6f3] bg-[#f0faff] p-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0a3d8f] text-white">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a3d8f]">Downloadable Book</p>
                  <p className="mt-1 text-xl font-black text-slate-800">Cornerstone Youth Guide</p>
                </div>
              </div>

              <a
                href={cornerstoneBook}
                download
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/15 transition hover:bg-[#e7c00f]"
              >
                Download Book
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section id="vision" className="scroll-mt-20 bg-[#dfeefa] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[#b7d9f7] bg-white p-8 shadow-lg shadow-blue-200/50">
                <div className="flex items-center gap-3 text-[#0a3d8f]">
                  <Target size={26} />
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Vision</h2>
                </div>
                <p className="mt-6 text-2xl font-bold leading-relaxed text-slate-800">
                  Empowered, resilient and responsible youth who are able to fulfil their potential, contribute positively to society and build strong families and communities.
                </p>
              </div>

              <div className="rounded-[2rem] border border-[#b7d9f7] bg-white p-8 shadow-lg shadow-blue-200/50">
                <div className="flex items-center gap-3 text-[#0a3d8f]">
                  <BookOpen size={26} />
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Mission</h2>
                </div>
                <p className="mt-6 text-2xl font-bold leading-relaxed text-slate-800">
                  To empower adolescents and young people to develop personally, socially, educationally and economically through inclusive programmes in prevention, education, mentoring, skills development, sport, culture and community engagement.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] border border-[#b7d9f7] bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff6ff] text-[#0a3d8f]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0a3d8f]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMMES */}
        <section id="programmes" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Flagship Programmes</p>
            <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Helping young people build confidence, skills and belonging.</h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {programmes.map((programme) => (
              <div key={programme.title} className="overflow-hidden rounded-[2rem] border border-[#b7d9f7] bg-white shadow-[0_25px_80px_rgba(10,61,143,0.08)]">
                <div className={`h-2 bg-gradient-to-r ${programme.accent}`} />
                <div className="p-7">
                  <h3 className="text-2xl font-black text-[#0a3d8f]">{programme.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{programme.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {programme.details.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-[#00a1de]" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {programme.title === "Skills & Enterprise" && (
                      <li>
                        <a href="/projects" className="mt-2 inline-flex items-center gap-2 font-semibold text-[#0a3d8f] transition hover:text-[#00a1de]">
                          View project <ArrowRight size={16} />
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            id="projects"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="mt-12 overflow-hidden rounded-[2rem] border border-[#b7d9f7] bg-[#0a3d8f] text-white shadow-[0_30px_90px_rgba(10,61,143,0.2)]"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="relative min-h-[360px] overflow-hidden">
                {shoeMakingImages[0] && (
                  <img
                    src={shoeMakingImages[0].src}
                    alt="Young people learning shoe making skills at The Cornerstone"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062b68] via-[#0a3d8f]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7 sm:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#fcd116]">Skills & Enterprise</p>
                  <p className="mt-3 text-2xl font-black">Learning a craft. Building a livelihood.</p>
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Featured project</p>
                    <h2 className="mt-3 text-3xl font-black sm:text-4xl">Shoe Making Project</h2>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
                    {shoeMakingImages.length} project photos
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                  Follow the journey from practical training to handmade footwear. Participants learn how to turn raw materials into durable products while developing the discipline, precision and business confidence needed for economic independence.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-50">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Practical training</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Youth enterprise</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Handmade footwear</span>
                </div>
                <div className="mt-8 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-blue-200">Focus</p>
                    <p className="mt-2 font-bold">Footwear production</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-blue-200">Method</p>
                    <p className="mt-2 font-bold">Hands-on learning</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-blue-200">Outcome</p>
                    <p className="mt-2 font-bold">Enterprise readiness</p>
                  </div>
                </div>
                <a
                  href="/projects"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] shadow-lg shadow-yellow-900/20 transition hover:bg-[#e7c00f]"
                >
                  Explore the project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* GOVERNANCE */}
        <section id="governance" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Governance</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">A strong governance framework built for accountability and service.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-100">
                The organisation is governed through a General Assembly, Executive Committee, Conflict Resolution, Complaints and Ethics Committee, Audit and Oversight Committee and Advisory Council. In July 2026, The Cornerstone revised its governance framework to align with Rwanda’s current NGO legislation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {governance.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-[#b7d9f7] bg-[#edf8ff] p-5 text-lg font-semibold text-[#0a3d8f] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="scroll-mt-20 bg-[#f3f7fb] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Gallery</p>
                <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Moments from our training sessions and community activities.</h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                From karate training and cultural celebrations to school outreach and skills workshops, our gallery reflects the energy, discipline and togetherness behind every Cornerstone activity.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#dfeaf9] bg-white p-3 shadow-[0_30px_90px_rgba(10,61,143,0.08)] sm:p-5">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={galleryImages[activeSlide].title}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="relative"
                  >
                    <img
                      src={galleryImages[activeSlide].src}
                      alt={`${galleryImages[activeSlide].title} – The Cornerstone Rwanda`}
                      className="h-[320px] w-full object-cover sm:h-[560px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-200">
                        {galleryImages[activeSlide].category}
                      </p>
                      <h3 className="mt-3 text-2xl font-black sm:text-4xl">{galleryImages[activeSlide].title}</h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xl text-white backdrop-blur-sm transition hover:bg-black/45"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-xl text-white backdrop-blur-sm transition hover:bg-black/45"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-4 xl:grid-cols-6">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.title}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${image.title}`}
                    className={`overflow-hidden rounded-2xl border transition ${
                      activeSlide === index
                        ? "border-[#0a3d8f] shadow-lg shadow-blue-200/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt=""
                      loading="lazy"
                      className={`h-16 w-full object-cover transition sm:h-20 ${
                        activeSlide === index ? "scale-105 opacity-100" : "opacity-70"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="bg-[#f1f5f1] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Partners & Collaborators</p>
                <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Working together for youth wellbeing and opportunity.</h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="rounded-[1.5rem] border border-[#dfe6df] bg-white p-6 text-center text-lg font-semibold text-slate-700 shadow-sm">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWS */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">News & Events</p>
            <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Updates from the field and community.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-[#dfe6df] bg-white p-6 shadow-[0_20px_60px_rgba(16,37,33,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a3d8f]">{item.date}</p>
                <h3 className="mt-4 text-xl font-bold leading-relaxed text-[#0a3d8f]">{item.title}</h3>
                <button
                  type="button"
                  onClick={() => setModalInfo(learnMoreContent.programmes)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a3d8f]"
                >
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* GET INVOLVED */}
        <section id="get-involved" className="scroll-mt-20 bg-[#0a3d8f] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Get Involved</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">Support a new generation of leaders, creators and change-makers.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
                Whether through volunteering, partnership, mentorship, funding or outreach, your support helps young people access safe spaces, practical skills and opportunities to thrive.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <HandCoins className="text-[#fcd116]" size={22} />
                  <p className="mt-3 text-xl font-bold">Support programmes</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Briefcase className="text-[#fcd116]" size={22} />
                  <p className="mt-3 text-xl font-bold">Partner with us</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-black text-white">Ways to contribute</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-200">
                <li>• Volunteer as a mentor, coach or community supporter</li>
                <li>• Partner with The Cornerstone on youth development initiatives</li>
                <li>• Provide in-kind support or resources for programmes</li>
                <li>• Share knowledge, expertise and networks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0a3d8f]">Contact Us</p>
              <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">Let’s work together for stronger youth futures.</h2>
              <div className="mt-8 space-y-5 text-slate-800">
                <div className="flex items-center gap-3">
                  <MapPin className="shrink-0 text-[#0a3d8f]" size={20} />
                  <span>KK 383F St, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="shrink-0 text-[#0a3d8f]" size={20} />
                  <a href="tel:+250788585110" className="hover:underline">+250 788 585 110</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="shrink-0 text-[#0a3d8f]" size={20} />
                  <a href="mailto:rwandacornestone@gmail.com" className="break-all text-[#0a3d8f] hover:underline">rwandacornestone@gmail.com</a>
                </div>
              </div>

              {socialLinks.some((s) => s.href) && (
                <div className="mt-8">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0a3d8f]">Follow us</p>
                  <SocialIcons />
                </div>
              )}

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#dfe6df] bg-white shadow-[0_25px_80px_rgba(20,43,36,0.08)]">
                <iframe
                  title="The Cornerstone location map"
                  src="https://www.google.com/maps?q=KK%20383F%20St%2C%20Kigali%2C%20Rwanda&z=15&output=embed"
                  className="h-[300px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#dfe6df] bg-white p-7 shadow-[0_25px_80px_rgba(20,43,36,0.08)]">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Partnership, volunteering, support..."
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how you would like to support or collaborate..."
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#00a1de]"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-semibold text-[#0a3d8f] transition hover:bg-[#e7c00f] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f8f4ee]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-base font-black tracking-[0.18em] text-[#0a3d8f]">THE CORNERSTONE</p>
            <p className="mt-2">Education • Confidence • Change</p>
            <p className="mt-1 text-xs text-slate-500">© {new Date().getFullYear()} The Cornerstone, Kigali, Rwanda</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#about" className="transition hover:text-[#00a1de]">About</a>
            <a href="#team" className="transition hover:text-[#00a1de]">Team</a>
            <a href="/founder" className="transition hover:text-[#00a1de]">Founder</a>
            <a href="#programmes" className="transition hover:text-[#00a1de]">Programmes</a>
            <a href="#impact" className="transition hover:text-[#00a1de]">Impact</a>
            <a href="#contact" className="transition hover:text-[#00a1de]">Contact</a>
          </div>
          <SocialIcons />
        </div>
      </footer>
    </div>
  );
}

export default App;