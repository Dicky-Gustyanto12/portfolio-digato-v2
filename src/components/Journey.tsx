// src/components/Journey.tsx
import kementanlogoImg from "../assets/kementanlogo.png";
import bbiblogoImg from "../assets/bbiblogo.png";
import dkpplogoImg from "../assets/dkpplogo.png";
import sipatexlogoImg from "../assets/sipatexlogo.png";
import radarsuaralogoImg from "../assets/radarsuaralogo.png";
import jayadigalogoImg from "../assets/jayadigalogo.png";

const COMPANIES = [
  { id: 1, name: "Kementerian Pertanian RI", logo: kementanlogoImg },
  { id: 2, name: "BBIB Singosari", logo: bbiblogoImg },
  {
    id: 3,
    name: "Dinas Ketahanan Pangan dan Pertanian Kab. Klaten",
    logo: dkpplogoImg,
  },
  { id: 4, name: "PT Sipatex", logo: sipatexlogoImg },
  { id: 5, name: "PT Radarsuara Indonesia", logo: radarsuaralogoImg },
  { id: 6, name: "PT Jaya Diga Innovation", logo: jayadigalogoImg },
];

export default function Journey() {
  return (
    // CLASS PENTING: sticky top-0 h-screen z-20
    <div className="sticky top-0 h-screen w-full bg-white flex flex-col justify-center overflow-hidden border-t border-zinc-100 z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)]">
      {/* Title & Description */}
      <div className="text-center mb-12 px-6">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-2 block">
          Professional Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">
          My Journey
        </h2>

        {/* TAMBAHAN: Deskripsi singkat sebelum masuk ke logo */}
        <p className="mt-4 text-sm md:text-base text-zinc-500 max-w-xl mx-auto leading-relaxed font-medium">
          Pengalaman bekerja dengan berbagai instansi pemerintahan dan
          perusahaan swasta dalam membangun dan mendigitalisasi solusi platform
          yang inovatif.
        </p>
      </div>

      {/* Marquee Bar */}
      <div className="w-full bg-zinc-50 py-16 border-y border-zinc-100 relative overflow-hidden">
        {/* CSS Animation dengan Hardware Acceleration agar smooth */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 25s linear infinite;
              will-change: transform;
              backface-visibility: hidden;
            }
          `}
        </style>

        {/* Logo Wrapper */}
        <div className="animate-marquee flex gap-12 md:gap-24 px-6">
          {[...COMPANIES, ...COMPANIES].map((company, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center transition-all duration-300 cursor-pointer"
            >
              {/* Wadah Logo */}
              <div className="w-36 h-24 md:w-52 md:h-32 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Nama Perusahaan (Muncul saat Hover) */}
              <span className="mt-2 text-zinc-800 text-xs font-bold tracking-wider text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
