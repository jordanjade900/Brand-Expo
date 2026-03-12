import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, MapPin, Lightbulb } from "lucide-react";

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop"
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-19T11:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-160px)]">
      {/* Background Slideshow & Overlay */}
      <div className="fixed inset-0 z-0 bg-[#020817]">
        <AnimatePresence>
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGES[bgIndex]})` }}
          />
        </AnimatePresence>
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-[#020817]/80 to-[#020817] pointer-events-none mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-[#020817]/60 to-[#020817] pointer-events-none" />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none mix-blend-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-400/10 blur-[100px]" />
      </div>

      {/* Background Lightbulb Icon */}
      <div className="fixed top-[20%] left-[-5%] z-0 opacity-10 pointer-events-none transform -rotate-12">
        <Lightbulb className="w-[400px] h-[400px] text-cyan-400" strokeWidth={0.5} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-light tracking-[0.2em] text-gray-300 mb-8 uppercase">Presents</h2>
          
          {/* Logo Recreation */}
          <div className="relative inline-block mb-16 px-4">
            <img 
              src="https://i.postimg.cc/YCtd5bVx/brand-expo-logo-removebg-preview.png" 
              alt="2026 Brand Expo" 
              className="w-full max-w-[400px] md:max-w-[700px] lg:max-w-[800px] h-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Theme */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative inline-block w-full max-w-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-blue-600/30 blur-2xl" />
            <div className="relative bg-[#020817]/60 backdrop-blur-xl border border-cyan-500/40 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight">
                Branding The Future:
              </h1>
              <p className="text-xl md:text-3xl font-light text-cyan-300 italic tracking-wide">
                Tomorrow, Designed Today
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-4 gap-3 md:gap-6 mb-12 w-full max-w-2xl"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="relative w-full aspect-square flex items-center justify-center bg-[#020817]/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl md:rounded-3xl shadow-[0_0_20px_rgba(6,182,212,0.1)] group hover:border-cyan-400/50 transition-colors">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl md:text-5xl font-black text-white tracking-tighter relative z-10">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-3 text-[8px] md:text-xs font-bold text-cyan-400 uppercase tracking-[0.2em]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Event Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-5xl mt-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-cyan-500/10 blur-xl" />
          <div className="relative bg-[#020817]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Date */}
              <div className="flex items-center justify-center md:justify-start space-x-4 pt-4 md:pt-0 group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-5xl font-bold text-white leading-none tracking-tighter">19</span>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-cyan-400 uppercase tracking-[0.2em] font-bold mb-0.5">Thursday</span>
                    <span className="text-sm font-medium text-white uppercase tracking-widest leading-none">March<br/>2026</span>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center justify-center space-x-4 pt-6 md:pt-0 group">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-2xl font-bold text-white tracking-wide">11AM - 5PM</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center md:justify-end space-x-4 pt-6 md:pt-0 group">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <span className="text-lg font-bold text-white tracking-wide leading-tight uppercase">UTech, Ja.<br/>Front Lawn</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
