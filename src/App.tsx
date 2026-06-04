import { useState, useEffect } from "react";
import digato from "./assets/digato.png";
import projects1 from "./assets/projects1.png";
import Navbar from "./components/Navbar";

function App() {
  const [hasScrolled, setHasScrolled] = useState(false);
  // 👈 State untuk memicu animasi saat pertama kali halaman dimuat (load)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Aktifkan animasi masuk setelah komponen berhasil dirender
    setIsLoaded(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-auto bg-zinc-950 text-zinc-900 font-sans relative selection:bg-zinc-900 selection:text-white">
      <Navbar />

      {/* PREMIUM NOISE GRAIN OVERLAY */}
      <div className="fixed inset-0 opacity-[0.012] pointer-events-none z-50 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] mix-blend-overlay" />

      {/* 🥞 SECTION 1: PORTFOLIO MAIN (HERO) */}
      <div className="w-full min-h-screen md:h-screen p-6 sm:p-10 md:sticky md:top-0 z-10 bg-slate-100 flex items-center justify-center relative">
        <div className="w-full h-auto md:h-full flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-10 p-4 md:p-10 justify-center">
          {/* KOTAK 1: Brand & Role (Animasi Muncul Saat Pertama Dimuat)
              - opacity-0 translate-y-4: Posisi awal bersembunyi & agak ke bawah.
              - opacity-100 translate-y-0: Kondisi akhir setelah halaman dimuat.
          */}
          <div
            className={`flex flex-col justify-center text-left transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full  animate-pulse" />
            </span>
            <h1 className="text-6xl sm:text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-[0.95]">
              Portfolio <br /> Dicky Gustyanto
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-zinc-700 ml-0.5 ">
              Fullstack Developer.
            </p>
          </div>

          {/* 📦 KOTAK 2: VERTICAL FLOATING STACK WITH GRADUAL GRAYSCALE
    - items-center justify-center: Menjaga tumpukan gambar tegak lurus di tengah-tengah grid.
    - h-[400px] md:h-full: Memberikan ruang vertikal yang cukup agar tumpukan ke atas tidak menabrak navbar.
*/}
          <div className="flex items-center justify-center h-[400px] md:h-full relative w-full overflow-visible py-12 lg:py-0">
            {/* CONTAINER UTAMA GRUP TRANSISI */}
            <div className="relative w-64 h-40 sm:w-72 sm:h-44 md:w-80 md:h-48 group">
              {/* ── 🃏 KARTU 1 (PALING ATAS / BELAKANG - FULL HITAM PUTIH) ──
        - -translate-y-16: Didorong paling tinggi ke atas.
        - scale-85: Mengecil secara perspektif jarak jauh.
        - grayscale: Mengubah gambar menjadi 100% hitam putih murni.
        - opacity-40: Dibuat samar agar fokus tidak terpecah.
    */}
              {/* <div className="absolute inset-0 bg-zinc-300 rounded-2xl shadow-xl transition-all duration-700 ease-out transform -translate-y-14 sm:-translate-y-16 scale-85 grayscale opacity-40 group-hover:-translate-y-24 group-hover:scale-90 overflow-hidden border border-zinc-400/20">
                <img
                  src={projects1}
                  alt="Project Stack Back"
                  className="w-full h-full object-cover object-center"
                />
              </div> */}

              {/* ── 🃏 KARTU 2 (TENGAH - SETENGAH HITAM PUTIH / MUTED) ──
        - -translate-y-8: Posisi menggantung di tengah tumpukan.
        - scale-92: Ukuran transisi medium.
        - grayscale-[50%] / opacity-70: Warna mulai memudar setengah matang menuju monokrom.
    */}
              {/* <div className="absolute inset-0 bg-zinc-200 rounded-2xl shadow-2xl transition-all duration-700 ease-out transform -translate-y-7 sm:-translate-y-8 scale-92 grayscale-[60%] opacity-70 group-hover:-translate-y-12 group-hover:scale-98 overflow-hidden border border-zinc-300/30">
                <img
                  src={projects1}
                  alt="Project Stack Middle"
                  className="w-full h-full object-cover object-center"
                />
              </div> */}

              {/* ── 🃏 KARTU 3 (PALING DEPAN - FULL WARNA & UTAMA) ──
        - z-10: Berada di kasta tertinggi paling depan monitor.
        - shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)]: Bayangan tebal menyebar ke bawah agar terlihat sangat melayang.
        - scale-100 / grayscale-0: Tampil tajam dengan warna asli 100%.
    */}
              {/* <div className="absolute inset-0 bg-white rounded-2xl z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-white/40 transition-all duration-700 ease-out transform scale-100 group-hover:scale-105 overflow-hidden ">
                <img
                  src={projects1}
                  alt="Main Project Front"
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
              </div> */}
            </div>
          </div>

          {/* KOTAK 3: Philosophy & Quote (Diberi efek delay 500ms agar muncul bergantian) */}
          <div
            className={`flex flex-col justify-center pt-6 border-t border-zinc-200/60 lg:border-none lg:pt-0 lg:pl-10 lg:border-l lg:border-zinc-200 transition-all duration-1000 delay-500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl sm:text-2xl leading-relaxed text-zinc-700 italic font-serif">
              "Every masterpiece starts with a long learning journey."
            </p>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 mt-4 block uppercase">
              — Philosophy
            </span>
          </div>
        </div>

        {/* FLOATING SCROLL INDICATOR */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 transition-opacity duration-1000 delay-700 ${
            isLoaded ? "opacity-100 animate-bounce" : "opacity-0"
          }`}
        >
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase ">
            Scroll to explore
          </span>
          <svg
            className="w-4 h-4 text-black"
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

      {/* 🥞 SECTION 2: PROJECT SECTION (ANIMASI DI-TRIGGER SAAT SCROLL)
          👉 Ketika halaman di-scroll (`hasScrolled` bernilai true), semua teks dan gambar 
             di dalam Section 2 akan serentak memudar masuk naik ke atas secara dramatis.
      */}
      <div
        className={`w-full min-h-screen md:h-screen p-6 sm:p-10 relative z-20 bg-slate-100 flex items-center justify-center border-t border-zinc-200/30 transition-all duration-700 ${
          hasScrolled
            ? "md:shadow-[0_-30px_60px_-10px_rgba(0,0,0,0.12)]"
            : "shadow-none"
        }`}
      >
        <div className="w-full h-auto md:h-full flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-10 p-4 md:p-10 justify-center">
          {/* KOTAK 1: Project Title (Animasi Scroll) */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 ease-out ${
              hasScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-3 block">
              ✦ FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-none">
              Project Terbaru
            </h2>
            <p className="text-lg md:text-xl mt-2 text-zinc-500 font-medium">
              E-Commerce & IoT Project.
            </p>
          </div>

          {/* KOTAK 2: Showcase Image (Animasi Scroll + Efek Hover) */}
          <div
            className={`flex justify-center items-center py-6 lg:py-0 relative group transition-all duration-1000 delay-200 ease-out ${
              hasScrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="absolute inset-0 bg-emerald-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={digato}
              alt="Project Showcase"
              className="w-40 sm:w-48 md:w-3/5 h-auto object-contain max-h-[30vh] md:max-h-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* KOTAK 3: Project Description (Animasi Scroll) */}
          <div
            className={`flex flex-col justify-center pt-6 border-t border-zinc-200/60 lg:border-none lg:pt-0 lg:pl-10 lg:border-l lg:border-zinc-200 transition-all duration-1000 delay-400 ease-out ${
              hasScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm md:text-base leading-relaxed text-zinc-600 font-medium">
              Menampilkan karya rekayasa perangkat lunak terbaik dengan optimasi
              performa tinggi, struktur kode yang modular menggunakan React
              TypeScript dan ekosistem modern.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-zinc-200/60 text-zinc-700 rounded-md border border-zinc-300/20">
                React
              </span>
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-zinc-200/60 text-zinc-700 rounded-md border border-zinc-300/20">
                TypeScript
              </span>
              <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-zinc-200/60 text-zinc-700 rounded-md border border-zinc-300/20">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
