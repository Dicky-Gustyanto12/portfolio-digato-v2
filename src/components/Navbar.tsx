export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max min-w-[290px] sm:min-w-0 transition-all duration-300">
      {/* 👉 PERBAIKAN SHADOW (SUPER WIDE & SOFT):
          - Menggunakan blur radius sebesar 60px dan 20px agar bayangan menyebar sangat luas ke samping dan bawah.
          - Kepekatan warna diatur sangat tipis (rgba 6% dan 3%) agar tidak kotor meskipun bayangannya lebar.
      */}
      <div className="w-full flex items-center justify-center gap-3 sm:gap-4 p-2 px-4 bg-white/75 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-white/60 transition-all duration-300">
        {/* Left Side: Mini Avatar / Logo */}
        <div className="flex items-center shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-950 overflow-hidden border border-white/40 shadow-inner">
            {/* <img src={avatar} alt="Logo" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Separator Garis Tipis Vertikal */}
        <div className="h-4 w-[1px] bg-zinc-300/80" />

        {/* Right Side: Link Navigasi Utama */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <a
            href="#home"
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200"
          >
            HOME
          </a>
          <a
            href="#projects"
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200"
          >
            PROJECTS
          </a>
          <a
            href="#about"
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200 shrink-0"
          >
            JOURNEY
          </a>
          <a
            href="#about"
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200 shrink-0"
          >
            ABOUT ME
          </a>
        </div>
      </div>
    </nav>
  );
}
