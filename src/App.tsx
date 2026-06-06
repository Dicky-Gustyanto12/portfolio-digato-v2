import { useState, useEffect, useRef } from "react";
import projects1 from "./assets/projects1.png";
import jayadigaImg from "./assets/jayadiga.png";
import Navbar from "./components/Navbar";
import Journey from "./components/Journey";
import ProjectShowcase from "./components/ProjectShowcase";
import AboutMe from "./components/AboutMe";

const useTypewriter = (
  text: string,
  speed: number = 50,
  startDelay: number = 0,
) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(intervalId);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return displayedText;
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);

  const titleLine1 = useTypewriter("Portfolio", 70, 500);
  const titleLine2 = useTypewriter("Dicky Gustyanto", 70, 1300);
  const roleText = useTypewriter("Fullstack Developer.", 50, 2600);
  const quoteText = useTypewriter(
    '"Every masterpiece starts with a long learning journey."',
    40,
    1500,
  );
  const philText = useTypewriter("— Digato", 40, 2800);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-auto bg-zinc-950 text-zinc-900 font-sans relative selection:bg-zinc-900 selection:text-white">
      <Navbar />

      <div className="fixed inset-0 opacity-[0.012] pointer-events-none z-50 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] mix-blend-overlay" />

      {/* SECTION 1: HERO */}
      <div className="w-full h-screen p-6 sm:p-10 sticky top-0 z-0 bg-slate-100 flex items-center justify-center">
        <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-10 px-4 pt-10 pb-10 md:p-10 justify-center">
          <div
            className={`flex flex-col justify-center text-left transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="relative text-6xl sm:text-5xl md:text-5xl font-black text-zinc-900 tracking-tight leading-[0.95]">
              <span
                className="opacity-0 select-none pointer-events-none"
                aria-hidden="true"
              >
                Portfolio <br /> Dicky Gustyanto
              </span>
              <span className="absolute top-0 left-0 w-full h-full">
                {titleLine1} <br /> {titleLine2}
              </span>
            </h1>
            <p className="relative text-xl md:text-2xl mt-4 text-zinc-700 ml-0.5">
              <span
                className="opacity-0 select-none pointer-events-none"
                aria-hidden="true"
              >
                Fullstack Developer.
              </span>
              <span className="absolute top-0 left-0 w-full h-full">
                {roleText}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center h-[250px] sm:h-[300px] md:h-full relative w-full overflow-visible mt-10 lg:mt-0">
            <div
              className="relative w-72 h-48 sm:w-80 sm:h-52 md:w-96 md:h-64 lg:w-[26rem] lg:h-[18rem] group cursor-pointer"
              onClick={() => setIsImageExpanded(!isImageExpanded)}
            >
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-out delay-[1000ms] ${isLoaded ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl shadow-xl transition-all duration-700 ease-out transform overflow-hidden ${isImageExpanded ? "-translate-y-24 scale-90" : "-translate-y-16 scale-85 group-hover:-translate-y-20"}`}
                >
                  <img
                    src={projects1}
                    alt="Project Stack Back"
                    className="w-full h-full object-cover object-center grayscale opacity-50"
                  />
                </div>
              </div>

              <div
                className={`absolute inset-0 transition-all duration-1000 ease-out delay-[1400ms] ${isLoaded ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className={`absolute inset-0 bg-zinc-200 rounded-2xl shadow-2xl transition-all duration-700 ease-out transform overflow-hidden ${isImageExpanded ? "-translate-y-12 scale-95" : "-translate-y-8 scale-92 group-hover:-translate-y-12"}`}
                >
                  <img
                    src={projects1}
                    alt="Project Stack Middle"
                    className="w-full h-full object-cover object-center grayscale-[20%] saturate-90"
                  />
                </div>
              </div>

              <div
                className={`absolute inset-0 transition-all duration-1000 ease-out delay-[1800ms] ${isLoaded ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className={`absolute inset-0 bg-white rounded-2xl z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-white/40 transition-all duration-700 ease-out transform overflow-hidden ${isImageExpanded ? "scale-100" : "scale-100 group-hover:scale-105"}`}
                >
                  <img
                    src={projects1}
                    alt="Main Project Front"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center pt-6 -mt-2 lg:mt-0 border-t border-zinc-200/60 lg:border-none lg:pt-0 lg:pl-10 lg:border-l lg:border-zinc-200 transition-all duration-1000 delay-500 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="relative text-xl sm:text-2xl leading-relaxed text-zinc-700 italic font-serif">
              <span
                className="opacity-0 select-none pointer-events-none"
                aria-hidden="true"
              >
                "Every masterpiece starts with a long learning journey."
              </span>
              <span className="absolute top-0 left-0 w-full h-full">
                {quoteText}
              </span>
            </p>
            <span className="relative text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 mt-4 block uppercase">
              <span
                className="opacity-0 select-none pointer-events-none"
                aria-hidden="true"
              >
                — Digato
              </span>
              <span className="absolute top-0 left-0 w-full h-full">
                {philText}
              </span>
            </span>
          </div>
        </div>

        <div
          onClick={scrollToExplore}
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer hover:text-zinc-500 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 animate-bounce" : "opacity-0"}`}
        >
          <span className="text-[9px] font-bold tracking-[0.25em] uppercase">
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

      {/* SECTION 2: PROJECTS */}
      <div ref={exploreRef} className="relative z-10">
        <ProjectShowcase />
      </div>

      {/* SECTION 3: JOURNEY */}
      <div className="relative z-20">
        <Journey />
      </div>

      {/* SECTION 4: ABOUT ME */}
      <div className="relative z-30">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
