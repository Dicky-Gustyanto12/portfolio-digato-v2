import { useState, useEffect, useRef } from "react";
import alsindataImg from "../assets/alsindata.png";
import jayadigaImg from "../assets/jayadiga.png";
import propaktaniImg from "../assets/propaktani.png";
import sifoyaImg from "../assets/bbibweb.png";
import simurpImg from "../assets/simurpsosmed.png";
import bbibsosmedImg from "../assets/bbibsosmed.png";
import radarsuaraImg from "../assets/radarsuara.png";
import simurpkalenderImg from "../assets/simurpkalender.png";
import scmImg from "../assets/scm.png";

interface ProjectItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Alsindata",
    image: alsindataImg,
    description:
      "Sistem Rekomendasi Alat dan Mesin Pertanian di Dinas Ketahanan Pangan dan Pertanian Kabupaten Klaten Berbasis Website.",
  },
  {
    id: 2,
    title: "Jaya Diga Innovation",
    image: jayadigaImg,
    description:
      "Website sistem manajemen dashboard internal dengan integrasi API real-time mencakup tentang absensi, cashflow, manajemen proyek.",
  },
  {
    id: 3,
    title: "Propaktani Documentation",
    image: propaktaniImg,
    description:
      "Buku panduan penggunaan Website Jejaring Hulu Hilir (JHH), platform dari Kementerian Pertanian untuk membangun jejaring petani, akses pelatihan Tani Trainer, dan informasi pasar.",
  },
  {
    id: 4,
    title: "Sifoya Documentation",
    image: sifoyaImg,
    description:
      "Petunjuk penggunaan teknis aplikasi SIFOYA (Sistem Informasi Aplikasi BBIB Singosari), platform Android untuk mendigitalisasi layanan Balai Besar Inseminasi Buatan Singosari.",
  },
  {
    id: 5,
    title: "SIMURP Social Media",
    image: simurpImg,
    description:
      "Mengelola strategi konten media sosial SIMURP untuk mengedukasi publik mengenai praktik Pertanian Cerdas Iklim melalui publikasi harian yang konsisten.",
  },
  {
    id: 6,
    title: "BBIB Social Media",
    image: bbibsosmedImg,
    description:
      "Mengelola strategi konten media sosial BBIB guna mengedukasi masyarakat terkait layanan penyediaan semen beku ternak unggul nasional.",
  },
  {
    id: 7,
    title: "Radarsuara News Admin Panel",
    image: radarsuaraImg,
    description:
      "Sistem manajemen berita portal Radarsuara yang dirancang untuk mempermudah alur kerja admin dalam menyusun, menyunting, hingga memublikasikan artikel berita secara efisien.",
  },
  {
    id: 8,
    title: "SIMURP Calendar Project",
    image: simurpkalenderImg,
    description:
      "Kalender untuk optimalisasi penjadwalan dan manajemen agenda kegiatan strategis dalam program SIMURP.",
  },
  {
    id: 9,
    title: "Supply Chain Management PT Sipatex",
    image: scmImg,
    description:
      "Manajemen rantai pasok di PT Sipatex Putri Lestari mencakup integrasi aliran bahan baku, peramalan kebutuhan menggunakan metode statistik, dan evaluasi kinerja pemasok.",
  },
];

export default function ProjectShowcase() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false); // Ref untuk mencegah re-render berlebihan

  useEffect(() => {
    const handleScroll = () => {
      // Teknik requestAnimationFrame agar animasi sinkron dengan refresh rate layar
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const { top, height } = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const maxScroll = height - windowHeight;
          const scrollPercentage = maxScroll > 0 ? -top / maxScroll : 0;

          setProgress(
            Math.max(
              0,
              Math.min(
                scrollPercentage * (PROJECT_DATA.length - 1),
                PROJECT_DATA.length - 1,
              ),
            ),
          );

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-30 w-full bg-zinc-950"
      style={{ height: `${PROJECT_DATA.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center pt-40 lg:pt-40 overflow-hidden">
        <h2 className="absolute top-24 lg:top-20 text-4xl md:text-5xl font-black text-white tracking-tight z-20">
          Projects
        </h2>

        <div className="absolute bottom-6 flex flex-col items-center gap-1.5 animate-bounce text-zinc-500 z-40">
          <span className="text-[7px] font-bold tracking-[0.25em] uppercase">
            Scroll to explore
          </span>
          <svg
            className="w-2 h-2 md:w-4 md:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

        <div className="relative w-[calc(100%-3rem)] md:w-[calc(100%-8rem)] max-w-7xl h-[65vh] lg:h-[70vh]">
          {PROJECT_DATA.map((project, index) => {
            const offset = progress - index;
            const isPast = offset > 0;
            const translateY = isPast ? -(offset * 20) : -(offset * 100);
            const opacity = isPast ? Math.max(1 - offset * 2, 0) : 1;
            const scale = isPast ? Math.max(1 - offset * 0.05, 0.95) : 1;

            return (
              <div
                key={project.id}
                className={`absolute top-0 w-full h-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row gap-6 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                style={{
                  transform: `translateY(${translateY}vh) scale(${scale})`,
                  opacity: opacity,
                  zIndex: index,
                  willChange: "transform, opacity", // Memberi instruksi GPU untuk mengoptimalkan animasi ini
                }}
              >
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-zinc-800 rounded-2xl p-6 lg:p-10 min-h-[200px] lg:min-h-[400px] xl:min-h-[450px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-h-[300px] lg:max-h-[400px] object-contain"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center py-2 lg:py-6">
                  <span className="text-[10px] lg:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">
                    0{project.id} — Projects
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-white my-3 lg:my-5 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-justify md:text-left text-sm md:text-base lg:text-lg text-zinc-400 font-medium leading-relaxed mb-6 lg:mb-10">
                    {project.description}
                  </p>
                  <button className="w-fit flex items-center gap-3 px-6 py-3 lg:px-8 lg:py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors text-sm lg:text-base">
                    <span>View Detail</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
