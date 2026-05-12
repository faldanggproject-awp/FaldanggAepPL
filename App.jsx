import React, { useState, useEffect } from 'react';
import { 
  Play, 
  X, 
  Instagram, 
  ArrowRight,
  ArrowLeft, 
  Trophy, 
  Zap, 
  Sparkles, 
  Video, 
  Star, 
  MessageCircle, 
  Monitor, 
  Check, 
  Smartphone, 
  Briefcase, 
  Tag,
  Languages,
  ChevronDown,
  Layout,
  Layers,
  Clapperboard,
  Tv,
  Camera,
  Activity
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
  // --- STATE MANAGEMENT ---
  const [currentPage, setCurrentPage] = useState('portfolio'); 
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isScrolled, setIsScrolled] = useState(false);
  const [langAbout, setLangAbout] = useState('ID');
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // --- DATA CONFIGURATION ---
  const whatsappNumber = "6287713907028";
  const profilePhoto = "https://drive.google.com/thumbnail?id=1dRhprhx18WX_HJgfa9zU5WGbqCWSW2Ko&sz=w1000";
  
  const categories = ['Semua', 'Video Editing', 'Motion Graphics', 'Lainnya'];

  const showreelData = {
    id: 'showreel',
    title: "The Master Reel",
    category: "Masterpiece", 
    isVertical: false, 
    videoUrl: "https://drive.google.com/file/d/1kyX7Ys0Fwah8dEGRRpgimfIcPy4KCiEE/preview", 
    desc: "Kumpulan karya terbaik yang menggabungkan keahlian Motion Graphics, Video Editing, dan Visual Effects (VFX) tingkat tinggi."
  };

  const projects = [
    { id: 1, title: "Social Media Storytelling", category: "Video Editing", isVertical: true, videoUrl: "https://drive.google.com/file/d/19gjVMRb8YBiWmyKqLD0QvE1Asf_aAV8v/preview", desc: "Video Storytelling Edukasi Tentang Berbisnis Di Sosial Media." },
    { id: 2, title: "Marketing Strategy", category: "Video Editing", isVertical: true, videoUrl: "https://drive.google.com/file/d/1uHtsGTRCZMU7dnrcmZU-QFXNtVKQvn87/preview", desc: "Video Storytelling Marketing Untuk @sozmedagency." },
    { id: 3, title: "Short Clips Edition", category: "Video Editing", isVertical: true, videoUrl: "https://drive.google.com/file/d/1NEHJhGfpC-sSgerLr7IHKuvrdiaFrp/preview", desc: "Video Storytelling Motivasi Dari Video Panjang Timothy Ronald dan di buat menjadi (CLIP)." },
    { id: 4, title: "Education Series", category: "Video Editing", isVertical: true, videoUrl: "https://drive.google.com/file/d/1NADGk2fXcYkjlwqctPfwRtso37B2HrGt/preview", desc: "Video Storytelling Edukasi Tentang Perbedaan Berserah atau Pasrah." },
    { id: 6, title: "Name Animation AI", category: "Motion Graphics", isVertical: false, videoUrl: "https://drive.google.com/file/d/1J2NQf5ihoyj2TyB2AvyTWq4aj36nFGjs/preview", desc: "Membuat nama di Adobe Illustrator dengan Motion Graphics." },
    { id: 7, title: "Chess Motion Graphic", category: "Motion Graphics", isVertical: false, videoUrl: "https://drive.google.com/file/d/1RX_jaAZEwnDMyt-mIKQSjYnX6_IsjVkJ/preview", desc: "Motion Graphics permainan catur." },
    { id: 8, title: "Stream Overlay Design", category: "Motion Graphics", isVertical: false, videoUrl: "https://drive.google.com/file/d/1xgV2RXS0hSGP1Dfej8M68w84nH9yJd2W/preview", desc: "Motion Graphics overlay untuk streaming @HiddemGame Store (DummyProject)." },
    { id: 9, title: "Messi Smart Brain", category: "Motion Graphics", isVertical: false, videoUrl: "https://drive.google.com/file/d/1JMDnrv3YSL-0kJImd_Ad_oBTa1a7gKbo/preview", desc: "Motion Graphics Messi bermain bola dengan kecerdasan otaknya di lapangan." },
    { id: 10, title: "Wedding Invitations", category: "Motion Graphics", isVertical: true, videoUrl: "https://drive.google.com/file/d/1t_7pS0vVxNsRiir_7rDVnmGPUs49lG4A/preview", desc: "Undangan pernikahan untuk Gen-Z dengan Motion Graphics." },
    { id: 11, title: "VFX Disappear Dunk", category: "Lainnya", isVertical: false, videoUrl: "https://drive.google.com/file/d/17I58XTHkoQ1EmylnVKKHFxX3n4ogC9RC/preview", desc: "VFX Basket: Orang menghilang lalu melakukan dunk seperti yang sering digunakan @dennysumargo." },
    { id: 12, title: "Split Ball VFX", category: "Lainnya", isVertical: false, videoUrl: "https://drive.google.com/file/d/1bAwEDHVYzMhEwYrOO5LUdbsUfOVF8lVQ/preview", desc: "VFX Tembakan Basket: Satu bola menjadi tiga sebelum masuk ke ring." },
    { id: 13, title: "Color Grading Power", category: "Lainnya", isVertical: true, videoUrl: "https://drive.google.com/file/d/17nj_Cfub9kc9T7Iqm92ptaFmJh-vVSFY/preview", desc: "Kekuatan Color Grading: Mengubah footage pagi menjadi suasana malam dengan efek visual." },
    { id: 14, title: "Short Movie Trailer", category: "Lainnya", isVertical: false, videoUrl: "https://drive.google.com/file/d/18UtGI0K4x77KGJOdmqUuDPvrlOok5blS/preview", desc: "Trailer animasi untuk film pendek 'One More Day' @LenteraAnimation." },
  ];

  const pricingPlans = [
    {
      title: "BASIC",
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      price: "Rp 119rb",
      features: ["Teks Tipografi", "Cutting & Pacing", "Efek Suara & Musik", "Motion Dasar", "Format Vertikal (9:16)", "Revisi 2x"],
      popular: false
    },
    {
      title: "PREMIUM",
      icon: <Star className="w-8 h-8 text-rose-500" />,
      price: "Rp 169rb",
      features: ["Teks Tipografi", "Cutting Profesional", "Efek Suara & Musik", "Advanced Motion", "Color Grading", "Format Vertikal (9:16)", "Revisi 3x"],
      popular: true
    },
    {
      title: "BUSINESS",
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      price: "Rp 249Rb",
      features: ["Teks Tipografi", "Visual Effects (VFX)", "SFX Lanjutan", "Advanced Motion", "Cinematic Grading", "Request Resolusi", "Revisi 3x"],
      popular: false
    }
  ];

  const faqs = [
    { q: "Berapa lama proses pengerjaannya?", a: "Proses pengerjaan biasanya selesai dalam 2-3 hari kerja ya brow." },
    { q: "Bagaimana cara mengirim file mentahnya?", a: "Anda bisa mengirimkan file Raw melalui link folder pribadi. Pastikan file aman dan lengkap ya Brow." },
    { q: "Apakah sudah termasuk revisi?", a: "Ya, setiap paket sudah termasuk kuota revisi Minor gratis sesuai deskripsi paket." }
  ];

  // --- LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const filteredProjects = activeFilter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleOrder = (planTitle) => {
    const msg = `Halo Faldangg, aku mau pesan paket ${planTitle}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const formatTimecode = (date) => date.toLocaleTimeString('en-GB', { hour12: false });

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden relative text-left">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] grain-bg"></div>
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="absolute top-0 left-0 h-[2px] bg-purple-600 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setCurrentPage('portfolio')}>
             <div className="w-10 h-10 bg-purple-600 flex items-center justify-center rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-500">
                <Monitor size={20} className="text-white" />
             </div>
             <div className="hidden sm:block text-left text-white">
                <span className="text-lg font-black tracking-tighter block leading-none mb-1 text-left">FALDANGG<span className="text-purple-500">.AEP</span></span>
                <span className="font-mono text-[8px] tracking-wider uppercase opacity-40 block text-left">Video Editor & Motion Designer</span>
             </div>
          </div>
          <div className="flex items-center gap-6 md:gap-12">
            {currentPage === 'portfolio' ? (
              <div className="hidden lg:flex gap-10 font-mono text-[10px] tracking-[0.2em] uppercase text-white/50">
                <a href="#hero" className="hover:text-purple-500 transition-colors text-white">Beranda</a>
                <a href="#about" className="hover:text-purple-500 transition-colors text-white">Tentang</a>
                <a href="#work" className="hover:text-purple-500 transition-colors text-white">Karya</a>
                <button onClick={() => setCurrentPage('prices')} className="hover:text-purple-500 font-bold tracking-widest text-white/40 transition-colors">Daftar Harga</button>
              </div>
            ) : (
              <button onClick={() => setCurrentPage('portfolio')} className="group flex items-center gap-3 text-white/50 hover:text-purple-500 transition-all">
                <ArrowLeft size={14} /> <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em]">Kembali</span>
              </button>
            )}
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" 
               className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-sm font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all shadow-lg active:scale-95">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {currentPage === 'portfolio' ? (
        <div className="portfolio-view">
          {/* HERO */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 text-center text-white">
            <div className="absolute inset-10 border-white/5 pointer-events-none z-0 opacity-50">
               <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/20"></div>
               <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20"></div>
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20"></div>
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-md mb-8 shadow-xl text-white">
                 <div className="flex items-center gap-2 border-r border-white/10 pr-3">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                    <span className="font-mono text-[9px] font-black text-white opacity-80 tracking-tighter uppercase">{formatTimecode(currentTime)}</span>
                 </div>
                 <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-purple-400 font-black">
                   FROM RAW TO WOW
                 </span>
              </div>
              
              <h1 className="text-[14vw] sm:text-[12vw] md:text-[8vw] font-black leading-[0.82] tracking-tighter uppercase mb-10 italic drop-shadow-2xl text-white">
                <span className="block opacity-95 mb-1">FADLAN</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-white pb-1">ISKANDAR.</span>
              </h1>

              <p className="max-w-xl mx-auto text-white/40 text-xs md:text-sm lg:text-base tracking-widest font-mono uppercase mb-10 leading-relaxed px-4 text-center">
                 Mentransformasi ide menjadi karya visual melalui high-end motion design dan penyuntingan video sinematik.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 text-white">
                 <a href="#work" className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-sm font-bold uppercase text-[10px] tracking-[0.3em] transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-purple-600/20 group">
                    Eksplorasi Karya <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </a>
                 <button onClick={() => setCurrentPage('prices')} className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-sm font-bold uppercase text-[10px] tracking-[0.3em] transition-all flex items-center gap-3 border border-white/10 active:scale-95">
                    <Tag size={14} className="text-purple-500" /> Cek Harga
                 </button>
              </div>

              <div className="flex justify-center gap-12 sm:gap-24 py-8 border-y border-white/5">
                <div className="text-center group">
                  <span className="block text-2xl font-black italic tracking-tighter text-white group-hover:text-purple-500 transition-colors">50+</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 text-left">Proyek Selesai</span>
                </div>
                <div className="text-center group">
                  <span className="block text-2xl font-black italic tracking-tighter text-white group-hover:text-purple-500 transition-colors">2023</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 text-left">Sejak Memulai</span>
                </div>
                <div className="text-center group">
                  <span className="block text-2xl font-black italic tracking-tighter text-white group-hover:text-purple-500 transition-colors">100%</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 text-left">Kepuasan</span>
                </div>
              </div>
            </div>
          </section>

          {/* MARQUEE */}
          <div className="bg-white text-black py-4 overflow-hidden flex whitespace-nowrap border-y border-black font-black uppercase italic tracking-tighter text-sm sm:text-xl relative z-20">
            <div className="animate-marquee inline-block">MOTION DESIGN • EDITING VIDEO • EFEK VISUAL • ANIMASI 2D • COLOR GRADING • CERITA SINEMATIK • &nbsp;</div>
            <div className="animate-marquee inline-block">MOTION DESIGN • EDITING VIDEO • EFEK VISUAL • ANIMASI 2D • COLOR GRADING • CERITA SINEMATIK • &nbsp;</div>
          </div>

          {/* ABOUT */}
          <section id="about" className="py-32 px-6 bg-[#080808] text-left">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7 text-left text-white">
                 <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6 text-white text-left">
                   <div className="flex items-center gap-4 text-white text-left">
                      <div className="w-2 h-8 bg-purple-600"></div>
                      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">Tentang Saya.</h2>
                   </div>
                   <button onClick={() => setLangAbout(langAbout === 'ID' ? 'EN' : 'ID')} className="font-mono text-[10px] tracking-widest border border-white/20 hover:bg-white hover:text-black px-4 py-2 rounded-sm transition-all flex items-center gap-2 text-white">
                     <Languages size={14} /> {langAbout === 'ID' ? 'ID' : 'EN'}
                   </button>
                 </div>
                 
                 <div className="space-y-8 text-white/70 text-lg md:text-xl font-medium leading-relaxed mb-12 text-justify text-white">
                    {langAbout === 'ID' ? (
                      <p>Saya <span className="text-white font-black italic">Muhammad Fadlan Iskandar</span>, Video Editor & Motion Graphics Designer berbasis di Indonesia. Sejak 2023, saya telah mendedikasikan diri untuk mentransformasi setiap cuplikan video yang awalnya <span className="text-white font-bold underline decoration-purple-600 decoration-2 underline-offset-4 text-white text-left text-white">Raw (mentah)</span> menjadi karya visual yang memberikan kesan <span className="text-purple-500 font-black italic">"Wow"</span>.</p>
                    ) : (
                      <p>I am <span className="text-white font-black italic text-white text-left">Muhammad Fadlan Iskandar</span>, an Indonesia-based Video Editor & Motion Graphics Designer. Since 2023, I have dedicated myself to transforming every piece of <span className="text-white font-bold underline decoration-purple-600 decoration-2 underline-offset-4 text-white text-left text-white">Raw footage</span> into a visual masterpiece with a definitive <span className="text-purple-500 font-black italic text-left text-white">"Wow"</span> factor.</p>
                    )}
                 </div>

                 <div className="mb-12">
                   <h4 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 mb-6 text-left">Keahlian Utama</h4>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        {name: 'After Effects', icon: <Layers size={14}/>},
                        {name: 'Premiere Pro', icon: <Clapperboard size={14}/>},
                        {name: 'Illustrator', icon: <Layout size={14}/>},
                        {name: 'VFX & SFX', icon: <Zap size={14}/>},
                        {name: 'Typography', icon: <Tv size={14}/>},
                        {name: 'Storytelling', icon: <Star size={14}/>}
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-sm hover:border-purple-600/50 hover:bg-purple-600/5 transition-all duration-300 text-left">
                           <span className="text-purple-500">{item.icon}</span>
                           <span className="text-[11px] font-bold uppercase tracking-widest text-white/60 text-left">{item.name}</span>
                        </div>
                      ))}
                   </div>
                 </div>
              </div>
              <div className="lg:col-span-5 relative text-left">
                 <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 bg-neutral-900 shadow-2xl group text-left text-left">
                    <img src={profilePhoto} alt="Fadlan" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 text-left text-left text-left" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-80 text-left text-left text-left"></div>
                    <div className="absolute bottom-6 left-6 text-white text-left">
                      <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-purple-500 mb-2 text-left">Profil Kreatif</p>
                      <p className="text-2xl font-black italic uppercase tracking-tighter text-white text-left text-left text-left text-left">Fadlan Iskandar</p>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* SHOWREEL */}
          <section id="showreel" className="py-24 px-6 bg-black text-left">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6 border-l-2 border-purple-600 pl-6 text-white text-left text-left">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-left text-white text-left text-left">THE MASTER REEL.</h2>
              </div>
              <div className="group relative aspect-video w-full rounded-sm overflow-hidden border border-white/5 bg-[#0a0a0a] cursor-pointer shadow-3xl text-left text-left text-left" onClick={() => setSelectedVideo(showreelData)}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black flex items-center justify-center overflow-hidden">
                   <Clapperboard size={120} className="text-white/5 transform -rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-center">
                   <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300 shadow-2xl text-center text-center text-center">
                      <Play fill="white" size={28} className="ml-1 text-white text-center text-center text-center" />
                   </div>
                   <span className="mt-6 font-mono text-[9px] tracking-[0.8em] uppercase text-white/40 group-hover:text-white transition-colors text-center text-center text-center text-center text-center text-center">Mulai Tonton</span>
                </div>
              </div>
            </div>
          </section>

          {/* ARCHIVE GRID */}
          <section id="work" className="py-32 px-6 border-t border-white/5 text-white text-left">
            <div className="max-w-7xl mx-auto text-left text-left">
              <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-white text-left text-left text-left">
                <h2 className="text-5xl font-black uppercase italic tracking-tighter text-left text-white text-left text-left text-left">ARSIP.</h2>
                <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 rounded-sm text-left">
                  {categories.map((cat, idx) => (
                    <button key={idx} onClick={() => setActiveFilter(cat)} className={`px-6 py-2 rounded-sm text-[9px] font-black uppercase tracking-widest transition-all ${activeFilter === cat ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'hover:bg-white/10 text-white/40'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-white">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group relative aspect-[1.1/1] overflow-hidden border border-white/5 cursor-pointer rounded-sm bg-[#0a0a0a] shadow-xl text-left" onClick={() => setSelectedVideo(project)}>
                    <div className={`absolute inset-0 z-0 bg-gradient-to-br transition-all duration-700 ${
                      project.category === 'Video Editing' ? 'from-blue-950/40' : 
                      project.category === 'Motion Graphics' ? 'from-purple-950/40' : 
                      'from-emerald-950/40'
                    } to-black group-hover:opacity-60 text-left`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 text-left text-left">
                       {project.category === 'Video Editing' ? <Clapperboard size={120} /> : project.category === 'Motion Graphics' ? <Layers size={120} /> : <Zap size={120} />}
                    </div>
                    <div className={`w-full h-full flex flex-col items-start justify-end p-8 border-b-4 ${
                      project.category === 'Video Editing' ? 'border-blue-500/20' : 
                      project.category === 'Motion Graphics' ? 'border-purple-500/20' : 
                      'border-emerald-500/20'
                    } group-hover:border-purple-500 transition-all duration-500 relative z-10 text-left text-left`}>
                      <div className="w-full text-left text-white text-left">
                        <div className="flex items-center gap-2 mb-3 text-left">
                           <div className={`w-1 h-1 rounded-full ${
                             project.category === 'Video Editing' ? 'bg-blue-500' : 
                             project.category === 'Motion Graphics' ? 'bg-purple-500' : 
                             'bg-emerald-500'
                           } text-left`}></div>
                           <span className="text-[8px] font-mono uppercase tracking-[0.3em] opacity-40 text-left">{project.category}</span>
                        </div>
                        <h4 className="text-white font-bold uppercase text-lg leading-tight tracking-tight group-hover:text-purple-400 transition-colors text-left text-left text-left text-left">{project.title}</h4>
                        <div className="mt-6 flex items-center gap-2 overflow-hidden text-white text-left">
                           <span className="h-[1px] w-6 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 text-left text-left"></span>
                           <span className="font-mono text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100 text-left text-left text-left text-left text-left">Buka Arsip</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 text-left">
                      <div className="bg-white text-black p-4 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform text-left">
                        <Play fill="black" size={20} className="text-left text-left" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="py-20 px-6 border-t border-white/5 text-center bg-black text-white text-center text-center text-center">
            <div className="max-w-4xl mx-auto mb-16 text-white text-center text-center text-center">
               <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-12 text-center text-white text-center text-center text-center">HUBUNGI SAYA.</h2>
               <div className="flex justify-center gap-10 text-center">
                  <a href="https://www.instagram.com/faldangg.aep/" target="_blank" className="p-4 rounded-sm border border-white/5 hover:border-purple-600 hover:text-purple-500 hover:-translate-y-1 transition-all text-white shadow-xl text-center text-center text-center"><Instagram size={28} /></a>
                  <a href="https://www.tiktok.com/@fadlaniskandarpro" target="_blank" className="p-4 rounded-sm border border-white/5 hover:border-purple-600 hover:text-purple-500 hover:-translate-y-1 transition-all text-white shadow-xl text-center text-center text-center"><TikTokIcon className="w-7 h-7" /></a>
               </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[8px] uppercase tracking-[0.4em] opacity-20 text-white text-center text-center text-center">
              <span>© 2026 Muhammad Fadlan Iskandar — Faldangg.aep</span>
              <div className="flex gap-8 text-white text-center text-center">
                 <span>UTC+7 Depok</span>
                 <span>{whatsappNumber}</span>
              </div>
            </div>
          </footer>
        </div>
      ) : (
        /* PRICES VIEW (PL) */
        <div className="prices-page min-h-screen bg-[#050505] text-white text-left animate-fade-in text-left text-left">
          <section className="pt-40 pb-32 px-6 text-left text-left text-left">
            <div className="max-w-7xl mx-auto text-white text-left text-white text-left text-left text-left">
              <div className="flex flex-col items-center text-center mb-20 text-left text-white text-left text-left text-left">
                 <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-[0.4em] mb-6 shadow-xl text-left text-white text-left text-left text-left">
                    <Tag size={14} className="text-purple-500" /> Panduan Investasi
                 </div>
                 <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 text-center text-white text-center text-center text-center text-center">HARGA.</h2>
                 <p className="text-white/40 font-mono text-xs uppercase tracking-widest max-w-2xl leading-relaxed text-center text-white text-center text-center text-center text-center text-center">
                    Solusi visual profesional untuk menaikkan level konten Anda. Pilih paket yang paling sesuai dengan visi kreatif Anda.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 text-white text-left text-left text-left text-left text-left">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`p-10 rounded-sm border transition-all duration-300 flex flex-col relative overflow-hidden text-left text-left text-left text-left text-left ${plan.popular ? 'border-purple-500 bg-[#111] shadow-2xl z-10 scale-105' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}`}>
                    {plan.popular && <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-rose-600 text-white text-[9px] font-black px-4 py-1 uppercase tracking-widest shadow-lg text-left text-left text-left text-left">Best Seller</div>}
                    <div className="mb-8 text-white text-left text-left">{plan.icon} <h3 className={`text-3xl font-black italic mt-4 uppercase tracking-tighter ${plan.popular ? 'text-purple-400' : 'text-white text-left text-left text-left text-left'}`}>{plan.title}</h3></div>
                    <div className="text-4xl font-black mb-4 tracking-tighter italic text-white text-left text-white text-left text-left text-left text-left text-left">{plan.price}<span className="text-sm font-mono font-normal opacity-40 ml-2 text-white text-left text-left text-left text-left text-left">Per Menit</span></div>
                    <div className="space-y-4 mb-12 flex-grow text-white text-left text-left text-left text-left text-left">
                      {plan.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white text-left text-white text-left text-left text-left text-left text-left text-left"><Check size={14} className="text-purple-500" strokeWidth={4} /> {f}</div>
                      ))}
                    </div>
                    <button onClick={() => handleOrder(plan.title)} className={`w-full py-5 rounded-sm font-black uppercase text-[11px] tracking-[0.3em] transition-all shadow-xl active:scale-95 ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-white/10 hover:bg-white/20 text-white'}`}>Pesan Sekarang</button>
                  </div>
                ))}
              </div>

              <div className="max-w-3xl mx-auto mt-32 text-white text-left text-left text-left text-left text-left">
                <div className="text-center mb-16 text-white text-left text-center text-center text-center text-center">
                   <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-purple-500 mb-2 text-center text-left text-left text-left text-left text-left text-left text-left">Pertanyaan Umum</p>
                   <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-center text-white text-center text-center text-center text-center text-center text-center text-center text-center">FAQ.</h2>
                </div>
                <div className="space-y-4 text-left text-white text-left text-left text-left text-left text-left">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-sm border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all shadow-lg text-left text-white text-left text-left text-left text-left text-left text-left text-left">
                      <button onClick={() => toggleFaq(index)} className="w-full px-8 py-6 flex items-center justify-between text-left group text-white text-left text-left text-left text-left text-left text-left text-left">
                        <span className="font-black italic uppercase tracking-widest text-sm text-white/80 group-hover:text-white transition-colors text-left text-white text-left text-left text-left text-left text-left text-left text-left">{faq.q}</span>
                        <ChevronDown className={`transition-transform duration-500 text-purple-500 ${activeFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {activeFaq === index && <div className="px-8 pb-8 text-white/50 text-sm leading-relaxed font-medium text-left text-white text-left text-left text-left text-left text-left text-left text-left">{faq.a}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <footer className="py-20 px-6 border-t border-white/5 text-center bg-black text-white text-center text-center text-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[8px] uppercase tracking-[0.4em] opacity-20 text-white text-center text-white text-center text-center text-center text-center">
              <span>© 2026 Muhammad Fadlan Iskandar — Faldangg.aep</span>
              <span className="text-white text-center text-center text-center text-center text-center text-center text-center">{whatsappNumber}</span>
            </div>
          </footer>
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 text-white text-left text-left text-left text-left">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-xl animate-fade-in text-left text-left text-left text-left text-left" onClick={() => setSelectedVideo(null)}></div>
          <div className={`relative w-full bg-[#0a0a0a] rounded-sm overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col max-h-[90vh] transition-all duration-300 ${selectedVideo.isVertical ? 'max-w-[400px]' : 'max-w-6xl'}`}>
            <div className="absolute top-0 left-0 w-full h-14 z-[130] flex items-center justify-between px-6 pointer-events-none text-left text-left text-left text-left text-left">
               <span className="bg-purple-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg pointer-events-auto text-left text-left text-left text-left text-left text-left">{selectedVideo.category}</span>
               <button className="bg-black/50 p-2.5 rounded-full hover:bg-white hover:text-black transition-all shadow-lg active:scale-90 pointer-events-auto text-left text-left text-left text-left text-left text-left text-left" onClick={() => setSelectedVideo(null)}><X size={18} /></button>
            </div>
            <div className={`w-full bg-black flex items-center justify-center relative overflow-hidden ${selectedVideo.isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
              <iframe src={selectedVideo.videoUrl} className="w-full h-full border-0 text-left text-left text-left text-left text-left text-left text-left text-left" title={selectedVideo.title} allowFullScreen></iframe>
            </div>
            <div className="p-8 md:p-10 bg-[#080808] border-t border-white/5 overflow-y-auto shrink-0 text-left text-white text-left text-left text-left text-left text-left">
              <div className="flex flex-col text-white text-left text-left text-left text-left text-left text-left text-left text-left">
                <h2 className={`${selectedVideo.isVertical ? 'text-2xl' : 'text-3xl md:text-5xl'} font-black uppercase italic tracking-tighter text-white mb-4 text-left text-white text-left text-left text-left text-left text-left text-left`}>{selectedVideo.title}</h2>
                <p className="text-white/40 leading-relaxed text-sm md:text-base max-w-3xl border-l-2 border-white/10 pl-6 text-justify text-white text-left text-left text-left text-left text-left text-left text-left">{selectedVideo.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS STYLES */}
      <style>{`
        html { scroll-behavior: smooth; }
        body { background-color: #050505; color: white; margin: 0; text-align: left; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 0px; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 30s linear infinite; display: inline-block; }
        .grain-bg { background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png"); }
      `}</style>
    </div>
  );
};

export default App;
