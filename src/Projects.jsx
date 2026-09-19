import { ArrowLeft, Download, Footprints, Layers3, Scissors, Store } from "lucide-react";
import { motion } from "framer-motion";

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

const projectStages = [
  {
    icon: Layers3,
    number: "01",
    title: "Materials and design",
    text: "Participants learn to identify leather, lining, soles, adhesives and tools, then plan a practical footwear design with attention to quality and fit.",
  },
  {
    icon: Scissors,
    number: "02",
    title: "Pattern and assembly",
    text: "The training moves from measurements and careful cutting to stitching, shaping, sole attachment and finishing a consistent handmade product.",
  },
  {
    icon: Store,
    number: "03",
    title: "Enterprise readiness",
    text: "Young makers build confidence in costing, quality control, customer needs and the everyday discipline required to grow a small footwear business.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f9fc] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#0a3d8f]/95 text-white backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#fcd116]">
            <ArrowLeft size={17} /> Back to The Cornerstone
          </a>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:inline">Projects & Impact</span>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#0a3d8f] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,161,222,0.45),transparent_42%),linear-gradient(135deg,#0a3d8f_0%,#062b68_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#fcd116]">Featured project</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] sm:text-6xl">Shoe Making Project</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-50 sm:text-xl">
                A practical pathway from craft training to dignified work, helping young people develop footwear production skills and the confidence to build sustainable livelihoods.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold text-blue-50">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">54 project photos</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Skills and enterprise</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Downloadable gallery</span>
              </div>
              <a href="#gallery" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#fcd116] px-6 py-3 font-bold text-[#0a3d8f] transition hover:bg-[#e7c00f]">
                Explore the gallery <Footprints size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl"
            >
              <img src={shoeMakingImages[26]?.src} alt="Shoe making training in progress" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/20 bg-[#062b68]/85 p-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">The learning journey</p>
                <p className="mt-1 font-bold">Precision, creativity and economic opportunity</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.23em] text-[#0a3d8f]">Professional knowledge</p>
            <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">How the project turns a craft into opportunity.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Quality footwear is built through a sequence of decisions: choosing the right materials, working accurately, checking the finish and understanding what customers value. This project connects those technical habits with the business skills needed for long-term independence.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projectStages.map(({ icon: Icon, number, title, text }, index) => (
              <motion.article
                key={number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[1.5rem] border border-[#cfe3ee] bg-white p-6 shadow-[0_18px_50px_rgba(10,61,143,0.06)]"
              >
                <div className="flex items-center justify-between text-[#00a1de]"><Icon size={27} /><span className="text-sm font-black tracking-[0.2em]">{number}</span></div>
                <h3 className="mt-6 text-xl font-black text-[#0a3d8f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="gallery" className="scroll-mt-20 bg-[#eaf5fa] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.23em] text-[#0a3d8f]">Project gallery</p>
                <h2 className="mt-4 text-3xl font-black text-[#0a3d8f] sm:text-4xl">A closer look at the work.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">Every image is available to download for project documentation and sharing.</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {shoeMakingImages.map((image, index) => (
                <motion.article
                  key={image.fileName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                  className="group overflow-hidden rounded-[1.25rem] border border-[#cfe3ee] bg-white shadow-[0_15px_45px_rgba(10,61,143,0.07)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img src={image.src} alt={image.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <a href={image.src} download={image.fileName} aria-label={`Download ${image.title}`} className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#0a3d8f] shadow-lg transition hover:bg-[#fcd116]">
                      <Download size={18} />
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-4"><p className="text-sm font-bold text-[#0a3d8f]">{image.title}</p><span className="text-xs text-slate-400">JPG</span></div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#062b68] px-4 py-8 text-center text-sm text-blue-100">
        The Cornerstone | Skills, confidence and opportunity for young people.
      </footer>
    </div>
  );
}
