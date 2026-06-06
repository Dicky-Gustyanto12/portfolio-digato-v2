// src/components/AboutMe.tsx
import myProfileImg from "../assets/digato2.jpeg";

const SKILLS = [
  "Frontend Development",
  "Backend Development",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "API Integration",
];

const EXPERIENCES = [
  { role: "Web Developer", company: "PT Jaya Diga Innovation" },
  { role: "IT Support", company: "PT Anak Pulau Indonesia" },
  {
    role: "Social Media Specialist",
    company: "Kementerian Pertanian Republik Indonesia",
  },
  { role: "Admin News Website", company: "PT Radarsuara Indonesia" },
];

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col items-center pt-20 pb-6 px-4 md:px-10 z-30 relative">
      {/* JUDUL SECTION */}
      <div className="w-full max-w-6xl text-center mb-6">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          About Me
        </h2>
      </div>

      {/* Konten Utama (Grid) */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 md:gap-6 flex-grow">
        {/* LEFT COLUMN: Profile Card */}
        <div className="bg-[#121212] border border-zinc-800/50 rounded-3xl p-5 md:p-8 flex flex-col">
          <div className="w-full">
            <div className="relative w-full aspect-square xl:aspect-[4/5] max-h-[30vh] md:max-h-[35vh] rounded-2xl overflow-hidden mb-5 bg-zinc-900 shrink-0 flex items-center justify-center">
              <img
                src={myProfileImg}
                alt="Dicky Gustyanto"
                className="w-full h-full object-contain object-center opacity-90 hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-[#121212]/80 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-zinc-200 text-[10px] md:text-xs font-medium tracking-wide">
                  Available for work
                </span>
              </div>
            </div>

            <h2 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-1">
              Hello I am Dicky Gustyanto
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-medium">
              Fullstack Developer Based in Indonesia.
            </p>
            {/* EMAIL WARNA PUTIH */}
            <p className="text-white text-xs md:text-sm mt-1 font-mono break-all">
              dickygustyanto12@gmail.com
            </p>
          </div>

          {/* Socials & Action */}
          <div className="flex items-center gap-3 mt-6">
            <a
              href="mailto:dickygustyanto12@gmail.com"
              className="flex-grow text-center bg-zinc-800/80 hover:bg-zinc-700 text-white font-medium py-3 px-6 rounded-full transition-all border border-zinc-700/50 text-sm"
            >
              Connect with me
            </a>
            <a
              href="#"
              className="w-[52px] h-[52px] rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all shrink-0"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Details Card */}
        <div className="bg-[#121212] border border-zinc-800/50 rounded-3xl p-5 md:p-10 flex flex-col">
          <div>
            <p className="text-zinc-300 text-sm md:text-[16px] leading-relaxed font-medium mb-6 text-justify">
              "Halo, saya Dicky Gustyanto. Seorang Fullstack Developer asal
              Indonesia yang berfokus pada pengembangan aplikasi web
              berkualitas. Saya senang menggabungkan logika backend yang solid
              dengan desain frontend yang responsif untuk menghadirkan
              pengalaman digital terbaik bagi pengguna."
            </p>
            <hr className="border-zinc-800/60 w-full mb-6" />
            <div className="flex flex-wrap gap-2 mb-6">
              {SKILLS.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-300 text-[10px] md:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience List - TAHUN DIHILANGKAN */}
          <div className="mt-auto">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-3 border-b border-zinc-800/60 last:border-0 text-[11px] md:text-sm"
              >
                <span className="text-zinc-400">{exp.role}</span>
                <span className="text-zinc-200 font-medium text-right">
                  {exp.company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full max-w-6xl mt-8 pt-4 border-t border-zinc-800/60 text-center">
        <p className="text-zinc-500 text-[10px] md:text-sm font-medium tracking-wider">
          Created by{" "}
          <span className="text-zinc-300 font-semibold">Dicky Gustyanto</span>
        </p>
      </div>
    </div>
  );
}
