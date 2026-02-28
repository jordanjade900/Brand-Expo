import { motion } from "motion/react";

export default function About() {
  return (
    <div className="relative z-10 flex-grow flex flex-col items-center container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
          Who <span className="text-cyan-400">We Are</span>
        </h1>
        
        <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">UTech, Ja. Marketing Seminar</h2>
            <p>
              The UTech, Ja. Marketing Seminar is a premier annual event organized by the brilliant minds of the University of Technology, Jamaica. For the 2025-2026 academic year, we are pushing the boundaries of innovation, strategy, and creative execution. Our seminar serves as a dynamic platform where students, industry professionals, and emerging entrepreneurs converge to share insights, network, and explore the future of marketing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/30 rounded-3xl p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <h2 className="text-2xl font-semibold text-white mb-4">2026 Brand Expo</h2>
            <p className="mb-4">
              This year's flagship event, the <strong>2026 Brand Expo</strong>, operates under the visionary theme: <em className="text-cyan-400">"Branding The Future: Tomorrow, Designed Today"</em>. 
            </p>
            <p>
              The Brand Expo is designed to showcase the power of forward-thinking brand strategies. It offers an unparalleled opportunity for businesses to exhibit their products, engage with a diverse and energetic audience, and position themselves at the forefront of tomorrow's market trends. Whether you are an established industry leader or an emerging startup, the Brand Expo is your launchpad to the future.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
