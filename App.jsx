import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Check, 
  Zap, 
  Clock, 
  Smartphone, 
  MessageCircle, 
  Play, 
  ChevronDown, 
  Moon, 
  Sun, 
  Star, 
  Briefcase,
  Instagram,
  ExternalLink
} from 'lucide-react';

// Ikon TikTok Custom
const TikTokIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const whatsappNumber = "6287713907028";
  const instagramUrl = "https://www.instagram.com/faldangg.aep/";
  const tiktokUrl = "https://www.tiktok.com/@fadlaniskandarpro";
  const behanceUrl = "https://www.behance.net/fadlanstudyy";

  const handleOrder = (planTitle) => {
    const message = encodeURIComponent(`Halo Faldangg, aku mau pesan paket ${planTitle}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const pricingPlans = [
    {
      title: "BASIC",
      icon: <Smartphone className={`w-8 h-8 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />,
      price: "Rp 119rb",
      unit: "Per Menit",
      description: "Solusi praktis untuk hasil yang bersih dan tajam. Fokus pada esensi cerita dengan pemotongan durasi yang presisi.",
      features: [
        "Typography Text",
        "Cutting & Pacing",
        "Sound Effect & Musik",
        "Basic Motion",
        "Format Vertikal (9:16)",
        "Revisi 2x"
      ],
      popular: false
    },
    {
      title: "PREMIUM",
      icon: <Star className="w-8 h-8 text-rose-500" />,
      price: "Rp 169rb",
      unit: "Per Menit",
      description: "Editing dinamis tingkat tinggi. Diperkaya elemen visual artistik untuk menjaga retensi dan memukau penonton Anda.",
      features: [
        "Typography Text",
        "Cutting & Pacing Profesional",
        "Sound Effect & Musik",
        "Advanced Motion Graphics",
        "Color Grading",
        "Format Vertikal (9:16)",
        "Revisi 3x"
      ],
      popular: true
    },
    {
      title: "BUSINESS",
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      price: "Rp 249Rb",
      unit: "Per Menit",
      description: "Standar produksi komersial kelas atas. Kualitas sinematik yang dirancang khusus untuk memperkuat bisnis Anda.",
      features: [
        "Typography Text",
        "Visual Effects (VFX)",
        "Advanced SFX & Music",
        "Advanced Motion Graphics",
        "Advanced Color Grading",
        "Request Format Resolusi",
        "Revisi 3x"
      ],
      popular: false
    }
  ];

  const faqs = [
    { q: "Berapa lama proses pengerjaannya?", a: "Proses pengerjaan biasanya selesai dalam 2-3 hari kerja tergantung antrian." },
    { q: "Bagaimana cara mengirim file mentahnya?", a: "Anda bisa mengirimkan file Raw melalui Google Drive, WeTransfer, atau Dropbox. Pastikan akses link dibuka untuk publik." },
    { q: "Apakah sudah termasuk revisi?", a: "Ya, setiap paket sudah termasuk kuota revisi gratis sesuai deskripsi paket." }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0a0a] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigasi */}
      <nav className={`sticky top-0 z-50 transition-all border-b ${isDarkMode ? 'bg-[#0a0a0a]/80 border-white/5 shadow-2xl' : 'bg-white/80 border-slate-200 shadow-sm'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex flex-col">
            <span className={`font-bold text-xl tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Faldangg<span className="text-violet-500">.aep</span>
            </span>
            <span className={`text-[10px] uppercase tracking-wider font-semibold transition-colors ${isDarkMode ? 'text-violet-400' : 'text-slate-400'}`}>Video Editor</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-white/5 text-yellow-400 hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => handleOrder("Konsultasi")}
              className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-violet-500/20 hover:bg-violet-700 transition"
            >
              Chat WA
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Transform Your Footage <br/>
          <span className="text-violet-500">From Raw To Wow</span>
        </h1>
        <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Jasa editing video profesional oleh <span className="font-semibold text-violet-500">Faldangg.aep</span>. Kami menghidupkan visi kreatif Anda dengan kualitas visual terbaik.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#harga" className="bg-violet-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">Daftar Harga</a>
          <a href={behanceUrl} target="_blank" rel="noopener noreferrer" className={`px-8 py-4 rounded-xl font-bold border transition hover:scale-105 ${isDarkMode ? 'border-white/10 bg-white/5 text-white' : 'border-slate-200 bg-white text-slate-700'}`}>
            Portofolio
          </a>
        </div>
      </section>

      {/* Harga Section */}
      <section id="harga" className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, i) => (
          <div 
            key={i} 
            className={`p-10 rounded-[2.5rem] border transition-all hover:translate-y-[-10px] flex flex-col ${
              plan.popular 
              ? 'border-violet-500 bg-white dark:bg-[#111] scale-105 z-10 shadow-2xl' 
              : `bg-white/5 border-white/5 ${!isDarkMode ? 'bg-white border-slate-200 shadow-sm' : ''}`
            }`}
          >
            {plan.popular && (
              <div className="bg-violet-600 text-white text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 tracking-widest uppercase">
                Terlaris
              </div>
            )}
            <div className="mb-6">
              {plan.icon} 
              <h3 className={`text-3xl font-bold mt-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
            </div>
            <div className={`text-4xl font-extrabold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {plan.price}
              <span className="text-sm font-normal opacity-50 ml-1">/{plan.unit}</span>
            </div>
            <p className="text-sm opacity-70 mb-8 leading-relaxed">{plan.description}</p>
            <div className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, j) => (
                <div key={j} className="flex items-center gap-3 text-sm font-medium">
                  <Check size={16} className="text-violet-500" strokeWidth={3} /> {f}
                </div>
              ))}
            </div>
            <button 
              onClick={() => handleOrder(plan.title)}
              className={`w-full py-5 rounded-2xl font-bold transition-all ${
                plan.popular 
                ? 'bg-violet-600 text-white shadow-xl hover:bg-violet-700' 
                : 'bg-white/10 hover:bg-white/20'
              } ${!isDarkMode && !plan.popular ? 'bg-slate-100 text-slate-800 hover:bg-slate-200' : ''}`}
            >
              Pesan Sekarang
            </button>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-20">
        <h2 className={`text-3xl font-bold text-center mb-12 italic transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`rounded-2xl border overflow-hidden transition-all ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-white border-slate-200 shadow-sm'}`}>
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 opacity-70 text-sm leading-relaxed animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 text-center border-t border-white/5 bg-black/40">
        <h2 className="text-4xl font-bold mb-10 italic uppercase tracking-tighter text-white leading-tight">Let's Create Magic.</h2>
        <div className="flex justify-center gap-6 mb-16">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 rounded-2xl hover:bg-violet-600 transition border border-white/10 text-white"><Instagram size={28} /></a>
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="p-5 bg-white/5 rounded-2xl hover:bg-violet-600 transition border border-white/10 text-white"><TikTokIcon className="w-7 h-7" /></a>
        </div>
        <p className="opacity-40 text-xs tracking-widest uppercase font-bold text-white">© 2024 Faldangg.aep. Crafted for the best.</p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

// BAGIAN PALING PENTING: Menempelkan aplikasi ke halaman web
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

export default App;
