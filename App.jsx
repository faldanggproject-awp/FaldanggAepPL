import React, { useState } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
      popular: false,
      cta: "Pesan Sekarang"
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
      popular: true,
      cta: "Pesan Sekarang"
    },
    {
      title: "BUSINESS",
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      price: "Rp 249Rb",
      unit: "Per Menit",
      description: "Standar produksi komersial kelas atas. Kualitas sinematik yang dirancang khusus untuk memperkuat kredibilitas bisnis Anda.",
      features: [
        "Typography Text",
        "Visual Effects (VFX)",
        "Advanced SFX & Music",
        "Advanced Motion Graphics",
        "Advanced Color Grading",
        "Request Format Resolusi",
        "Revisi 3x"
      ],
      popular: false,
      cta: "Pesan Sekarang"
    }
  ];

  const faqs = [
    {
      q: "Berapa lama proses pengerjaannya?",
      a: "Proses pengerjaan biasanya selesai dalam 2-3 hari kerja tergantung antrian."
    },
    {
      q: "Bagaimana cara mengirim file mentahnya?",
      a: "Anda bisa mengirimkan file Raw melalui Google Drive, WeTransfer, atau Dropbox. Pastikan akses link dibuka untuk publik."
    },
    {
      q: "Apakah sudah termasuk revisi?",
      a: "Ya, setiap paket sudah termasuk kuota Free revisi sesuai deskripsi paket."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDarkMode ? 'bg-[#0a0a0a] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigasi */}
      <nav className={`sticky top-0 z-50 transition-all border-b ${isDarkMode ? 'bg-[#0a0a0a]/80 border-white/5 shadow-2xl shadow-black' : 'bg-white/80 border-slate-200 shadow-sm'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Faldangg<span className="text-violet-500">.aep</span>
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-semibold transition-colors ${isDarkMode ? 'text-violet-400/60' : 'text-slate-400'}`}>Video Editor & Motion Designer</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#fitur" className={`transition-colors font-medium text-sm ${isDarkMode ? 'text-slate-400 hover:text-violet-400' : 'text-slate-600 hover:text-violet-600'}`}>Layanan</a>
              <a href="#harga" className={`transition-colors font-medium text-sm ${isDarkMode ? 'text-slate-400 hover:text-violet-400' : 'text-slate-600 hover:text-violet-600'}`}>Harga</a>
              <a href={behanceUrl} target="_blank" rel="noopener noreferrer" className={`transition-colors font-medium text-sm flex items-center gap-1 ${isDarkMode ? 'text-slate-400 hover:text-violet-400' : 'text-slate-600 hover:text-violet-600'}`}>
                Portfolio <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#faq" className={`transition-colors font-medium text-sm ${isDarkMode ? 'text-slate-400 hover:text-violet-400' : 'text-slate-600 hover:text-violet-600'}`}>FAQ</a>
              
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-white/5 text-yellow-400 hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button 
                onClick={() => handleOrder("Konsultasi")}
                className="bg-violet-600 text-white px-5 py-2 rounded-full font-medium hover:bg-violet-700 transition flex items-center gap-2 shadow-lg shadow-violet-500/20"
              >
                <MessageCircle className="w-4 h-4" /> Hubungi Kami
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button onClick={toggleDarkMode} className={`p-2 rounded-full ${isDarkMode ? 'bg-white/5 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button onClick={() => handleOrder("Konsultasi")} className="bg-violet-600 text-white p-2 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`py-24 px-4 transition-all relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-violet-900/10 via-[#0a0a0a] to-[#0a0a0a]' : 'bg-gradient-to-br from-violet-50 via-white to-slate-50'}`}>
        {isDarkMode && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[120px]"></div>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Transform Your Footage <br/>
            <span className="text-violet-500">From Raw To Wow</span>
          </h1>
          <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Jasa editing video Short-form content oleh <span className={`font-semibold ${isDarkMode ? 'text-violet-300' : 'text-slate-800'}`}>Faldangg.aep</span>. Kami menghidupkan visi kreatif Anda dengan kualitas visual God Damn!.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#harga" className={`px-8 py-4 rounded-xl font-bold transition shadow-lg ${isDarkMode ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}`}>
              Lihat Daftar Harga
            </a>
            <a href={behanceUrl} target="_blank" rel="noopener noreferrer" className={`px-8 py-4 rounded-xl font-bold transition border flex items-center justify-center gap-2 ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}>
              <Play className={`w-4 h-4 ${isDarkMode ? 'fill-violet-400 text-violet-400' : ''}`} /> Lihat Portofolio
            </a>
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section id="fitur" className={`py-16 transition-all border-y ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="text-yellow-500" />, title: "Cepat & Tepat", desc: "Deadline prioritas" },
            { icon: <Check className="text-green-500" />, title: "Kualitas 4K", desc: "Resolusi jernih" },
            { icon: <Clock className="text-blue-500" />, title: "Support 24/7", desc: "Konsultasi aktif" },
            { icon: <Play className="text-violet-500" />, title: "Bebas Hak Cipta", desc: "Aset aman" },
          ].map((item, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="flex justify-center mb-3">
                <div className={`p-4 rounded-2xl transition-all group-hover:scale-110 ${isDarkMode ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-50 group-hover:bg-violet-50'}`}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
              </div>
              <h3 className={`font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{item.title}</h3>
              <p className={`text-sm transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Harga Section */}
      <section id="harga" className={`py-24 px-4 transition-all ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Paket Harga Editing</h2>
          <p className="text-slate-500 font-medium">Investasi terbaik untuk konten visual masa depan Anda.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-[2.5rem] p-10 border transition-all hover:translate-y-[-8px] flex flex-col ${
                plan.popular 
                ? (isDarkMode ? 'bg-[#111] border-violet-500/50 shadow-2xl shadow-violet-900/20 scale-105 z-10' : 'bg-white border-violet-600 ring-4 ring-violet-600/10 scale-105 z-10 shadow-xl shadow-violet-100') 
                : (isDarkMode ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl')
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-6 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-lg shadow-violet-500/30">
                  Paling Populer
                </div>
              )}
              
              <div className="mb-6">
                <div className={`mb-6 inline-block p-4 rounded-2xl ${isDarkMode ? 'bg-white/5' : 'bg-slate-50'}`}>{plan.icon}</div>
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{plan.title}</h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
              </div>

              <div className={`mb-8 p-6 rounded-3xl transition-colors ${isDarkMode ? 'bg-white/5 border border-white/5' : 'bg-slate-50'}`}>
                <div className="flex items-baseline">
                  <span className={`text-4xl font-extrabold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                  <span className="ml-2 text-slate-500 font-bold uppercase text-[10px] tracking-wider">/{plan.unit}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${isDarkMode ? 'bg-violet-500/10 border-violet-500/20' : 'bg-violet-50 border-violet-100'}`}>
                      <Check className="w-3.5 h-3.5 text-violet-500" strokeWidth={3} />
                    </div>
                    <span className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleOrder(plan.title)}
                className={`w-full py-5 rounded-2xl font-bold transition text-lg ${
                plan.popular 
                ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-xl shadow-violet-500/20' 
                : (isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-800 hover:bg-slate-200')
              }`}>
                Pesan Sekarang
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-24 px-4 transition-all ${isDarkMode ? 'bg-white/[0.02]' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 italic transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Pertanyaan Sering Diajukan (FAQ)</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-3xl overflow-hidden transition-all border ${isDarkMode ? 'bg-[#0a0a0a] border-white/5 hover:border-white/10' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`w-full px-8 py-6 flex items-center justify-between text-left font-semibold transition-colors ${isDarkMode ? 'text-slate-200 hover:bg-white/5' : 'text-slate-800 hover:bg-slate-50'}`}
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`p-1.5 rounded-full transition-all duration-300 ${activeFaq === index ? 'bg-violet-600 text-white rotate-180' : (isDarkMode ? 'bg-white/5 text-slate-500' : 'bg-slate-100 text-slate-400')}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                {activeFaq === index && (
                  <div className={`px-8 pb-7 leading-relaxed animate-fadeIn transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`transition-all pt-24 pb-12 px-4 border-t ${isDarkMode ? 'bg-[#050505] text-white border-white/5' : 'bg-slate-900 text-white border-transparent'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic uppercase tracking-tighter leading-tight text-white">Let's Create <br/> Magic.</h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">Siap berkolaborasi untuk menciptakan karya visual yang God Gamn?!</p>
              <div className="flex gap-5">
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl transition border group bg-white/5 border-white/10 hover:bg-violet-600"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition text-white" />
                </a>
                <a 
                  href={tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl transition border group bg-white/5 border-white/10 hover:bg-violet-600"
                >
                  <TikTokIcon className="w-6 h-6 group-hover:scale-110 transition text-white" />
                </a>
              </div>
            </div>
            <div className={`p-10 rounded-[3rem] border backdrop-blur-sm transition-all ${isDarkMode ? 'bg-violet-500/5 border-violet-500/20 shadow-2xl' : 'bg-white/5 border-white/10 shadow-lg'}`}>
              <h4 className="text-2xl font-bold mb-5 flex items-center gap-3 tracking-wide text-white">
                KONSULTASI VIA WA
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.8)]"></span>
              </h4>
              <p className="text-slate-400 mb-10 italic text-lg leading-relaxed font-medium">Wujudkan visi kreatif video Anda sekarang.</p>
              <button 
                onClick={() => handleOrder("Konsultasi")}
                className="inline-flex items-center gap-4 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-6 rounded-3xl font-black transition w-full justify-center shadow-xl shadow-emerald-950/40 text-xl"
              >
                <MessageCircle fill="currentColor" className="w-7 h-7" /> CHAT SEKARANG
              </button>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-slate-500">
            <div className="flex flex-col items-center md:items-start group">
              <span className="font-bold text-2xl transition-colors text-white">Faldangg<span className="text-violet-500">.aep</span></span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-60 text-slate-300">The Creative Visionary</span>
            </div>
            <p className="font-semibold text-xs tracking-widest uppercase opacity-40 text-slate-300">© 2024 Faldangg.aep. Crafted for the best.</p>
            <div className="flex gap-10 font-bold text-[10px] uppercase tracking-[0.3em] opacity-60">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
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

export default App;