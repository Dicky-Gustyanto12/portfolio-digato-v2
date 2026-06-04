import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Definisikan tipe data untuk struktur FAQ
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqRowProps {
  num: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FaqRow({ num, question, answer, isOpen, onClick }: FaqRowProps) {
  return (
    <div className="border-b border-zinc-800 py-6 last:border-none">
      {/* Bagian Tombol Utama yang Diklik */}
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between text-left group cursor-pointer"
      >
        <div className="flex items-start gap-6">
          {/* Angka Indeks (01, 02, dst) */}
          <span className="text-xs font-mono text-zinc-600 pt-1 group-hover:text-zinc-400 transition-colors">
            {num}
          </span>
          {/* Teks Pertanyaan */}
          <h3 className="text-sm md:text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
            {question}
          </h3>
        </div>

        {/* Ikon Plus yang Berputar Otomatis Menggunakan Framer Motion */}
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-xl text-zinc-500 group-hover:text-white ml-4 flex-shrink-0 select-none"
        >
          +
        </motion.span>
      </button>

      {/* Wadah Animasi Meluncur Turun (AnimatePresence mengurus unmount dengan aman) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="overflow-hidden pl-11" // pl-11 agar teks jawaban sejajar dengan pertanyaan (geser setelah angka)
          >
            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  // State untuk menyimpan ID mana yang sedang terbuka (null artinya semua tertutup)
  const [activeId, setActiveId] = useState<string | null>(null);

  // Data tiruan yang mirip dengan isi template Palmer kamu
  const faqData: FaqItem[] = [
    {
      id: "01",
      question: "What services do you offer?",
      answer:
        "We deliver digital transformation through high-fidelity UI/UX engineering, Full-Stack React development, custom ERP administration panels, and automated agritech simulation dashboard solutions.",
    },
    {
      id: "02",
      question: "What is your typical turnaround time?",
      answer:
        "Standard production cycles range from 2 to 4 weeks depending on architectural complexity, integration points, and UI iteration requirements.",
    },
    {
      id: "03",
      question: "Can you handle both design and build?",
      answer:
        "Absolutely. We manage the entire lifecycle from visual prototype engineering in tools like Framer up to clean deployment via Vite, TypeScript, and modern backend frameworks.",
    },
  ];

  return (
    <div className="w-full max-w-2xl bg-zinc-950 p-6 rounded-2xl border border-zinc-900 shadow-2xl">
      <div className="flex flex-col">
        {faqData.map((item) => (
          <FaqRow
            key={item.id}
            num={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={activeId === item.id}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          />
        ))}
      </div>
    </div>
  );
}
