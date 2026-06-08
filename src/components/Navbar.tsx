// src/components/Navbar.tsx

export default function Navbar() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    // Khusus untuk HOME, paksa scroll ke titik paling atas (0)
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Untuk menu lain, cari berdasarkan ID
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max min-w-[290px] sm:min-w-0 transition-all duration-300">
      <div className="w-full flex items-center justify-center gap-3 sm:gap-4 p-2 px-4 bg-white/75 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-white/60 transition-all duration-300">
        <div className="flex items-center shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-950 overflow-hidden border border-white/40 shadow-inner"></div>
        </div>

        <div className="h-4 w-[1px] bg-zinc-300/80" />

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200"
          >
            HOME
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200"
          >
            PROJECTS
          </a>
          <a
            href="#journey"
            onClick={(e) => handleScroll(e, "journey")}
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200 shrink-0"
          >
            JOURNEY
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="px-2.5 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-800 hover:text-blue-600 transition-colors duration-200 shrink-0"
          >
            ABOUT ME
          </a>
        </div>
      </div>
    </nav>
  );
}
