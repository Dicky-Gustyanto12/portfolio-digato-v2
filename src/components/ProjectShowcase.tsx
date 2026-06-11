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
  link: string;
}

const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Alsindata",
    image: alsindataImg,
    description:
      "Sistem Rekomendasi Alat dan Mesin Pertanian di Dinas Ketahanan Pangan dan Pertanian Kabupaten Klaten Berbasis Website.",
    link: "https://github.com/Dicky-Gustyanto12/smart-deploy",
  },
  {
    id: 2,
    title: "Jaya Diga Innovation",
    image: jayadigaImg,
    description:
      "Website sistem manajemen dashboard internal dengan integrasi API real-time mencakup tentang absensi, cashflow, manajemen proyek.",
    link: "https://dicky-gustyanto12.github.io/",
  },
  {
    id: 3,
    title: "Propaktani Documentation",
    image: propaktaniImg,
    description:
      "Buku panduan penggunaan Website Jejaring Hulu Hilir (JHH), platform dari Kementerian Pertanian untuk membangun jejaring petani, akses pelatihan Tani Trainer, dan informasi pasar.",
    link: "https://drive.google.com/drive/folders/1IL7rPIFuEIigt189HM2E63W97hdg5fKj?usp=drive_link",
  },
  {
    id: 4,
    title: "Sifoya Documentation",
    image: sifoyaImg,
    description:
      "Petunjuk penggunaan teknis aplikasi SIFOYA (Sistem Informasi Aplikasi BBIB Singosari), platform Android untuk mendigitalisasi layanan Balai Besar Inseminasi Buatan Singosari.",
    link: "https://drive.google.com/drive/folders/1YtO3LAlgcsxwB8jacuql1724HzQYBe1f?usp=drive_link",
  },
  {
    id: 5,
    title: "SIMURP Social Media",
    image: simurpImg,
    description:
      "Mengelola strategi konten media sosial SIMURP untuk mengedukasi publik mengenai praktik Pertanian Cerdas Iklim melalui publikasi harian yang konsisten.",
    link: "https://drive.google.com/drive/folders/1qsYCWPGq0CIAl8fnA0OaQ-Y0PZOFhJRD?usp=drive_link",
  },
  {
    id: 6,
    title: "BBIB Social Media",
    image: bbibsosmedImg,
    description:
      "Mengelola strategi konten media sosial BBIB guna mengedukasi masyarakat terkait layanan penyediaan semen beku ternak unggul nasional.",
    link: "https://drive.google.com/drive/folders/1cQyazbu1kV1rOPX28cT6IXo6R8YoLk5s?usp=drive_link",
  },
  {
    id: 7,
    title: "Radarsuara News Admin Panel",
    image: radarsuaraImg,
    description:
      "Sistem manajemen berita portal Radarsuara yang dirancang untuk mempermudah alur kerja admin dalam menyusun, menyunting, hingga memublikasikan artikel berita secara efisien.",
    link: "https://drive.google.com/drive/folders/1VnakCv9gnty25kMnotBviezffbGsP4Xp?usp=drive_link",
  },
  {
    id: 8,
    title: "SIMURP Calendar Project",
    image: simurpkalenderImg,
    description:
      "Kalender untuk optimalisasi penjadwalan dan manajemen agenda kegiatan strategis dalam program SIMURP.",
    link: "https://drive.google.com/drive/folders/1Z6RsMODxlxpiXsUeYay73zomufqIQTTA?usp=drive_link",
  },
  {
    id: 9,
    title: "Supply Chain Management PT Sipatex",
    image: scmImg,
    description:
      "Manajemen rantai pasok di PT Sipatex Putri Lestari mencakup integrasi aliran bahan baku, peramalan kebutuhan menggunakan metode statistik, dan evaluasi kinerja pemasok.",
    link: "https://drive.google.com/drive/folders/1-suLY_Ve30Yw95iOzZ5h9g-eN5P7VH48?usp=drive_link",
  },
];

export default function ProjectShowcase() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
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
      {/* Menggunakan justify-center agar posisi kartu benar-benar di tengah layar */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Judul dengan posisi absolute agar tidak mengganggu layout kartu */}
        <h2 className="absolute top-16 md:top-24 text-3xl md:text-5xl font-black text-white tracking-tight z-20">
          Projects
        </h2>

        {/* Kontainer Kartu dengan max-height agar tidak nabrak atas-bawah */}
        <div className="relative w-[calc(100%-2rem)] md:w-[calc(100%-6rem)] max-w-6xl h-[65vh] max-h-[600px] mt-8 md:mt-12">
          {PROJECT_DATA.map((project, index) => {
            const offset = progress - index;
            const isPast = offset > 0;
            const translateY = isPast ? -(offset * 15) : -(offset * 120);
            const opacity = isPast ? Math.max(1 - offset * 1.5, 0) : 1;
            const scale = isPast ? Math.max(1 - offset * 0.05, 0.95) : 1;

            return (
              <div
                key={project.id}
                /* PERBAIKAN: Menggunakan gap proporsional, membuang width tetap, dan menggunakan flex-1 di children */
                className={`absolute top-0 w-full h-full bg-zinc-900 border border-zinc-800 rounded-3xl p-5 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-4 lg:gap-10 items-center overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                style={{
                  transform: `translateY(${translateY}vh) scale(${scale})`,
                  opacity: opacity,
                  zIndex: index,
                  willChange: "transform, opacity",
                }}
              >
                {/* Bagian Gambar: Menggunakan flex-1 agar otomatis membagi ruang 50:50 dengan aman */}
                <div className="flex-1 w-full flex items-center justify-center bg-zinc-800 rounded-2xl p-4 md:p-6 lg:p-8 h-[40%] lg:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Bagian Teks: Menggunakan flex-1 agar teks tidak memaksakan lebar melebihi wadah */}
                <div className="flex-1 w-full flex flex-col justify-center py-2 h-[60%] lg:h-full min-w-0">
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-1 md:mb-2 block">
                    0{project.id} — Projects
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white my-2 md:my-4 leading-tight truncate md:whitespace-normal">
                    {project.title}
                  </h3>
                  <p className="text-justify md:text-left text-xs sm:text-sm md:text-base text-zinc-400 font-medium leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors text-xs md:text-sm cursor-pointer"
                  >
                    <span>View Detail</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator dengan posisi absolute di bawah */}
        <div className="absolute bottom-6 flex flex-col items-center gap-1.5 animate-bounce text-zinc-500 z-40">
          <span className="text-[7px] md:text-[9px] font-bold tracking-[0.25em] uppercase">
            Scroll to explore
          </span>
          <svg
            className="w-3 h-3 md:w-4 md:h-4"
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
      </div>
    </div>
  );
}
