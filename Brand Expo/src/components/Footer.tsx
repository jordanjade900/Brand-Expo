import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-white/10 relative z-20 bg-[#020817]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center justify-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a href="https://instagram.com/brandexpoja" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">brandexpoja</span>
          </a>
          <span className="text-gray-600 hidden md:inline">|</span>
          <a href="https://instagram.com/utms25.26" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
            <Instagram className="w-5 h-5" />
            <span className="text-sm font-medium">utms25.26</span>
          </a>
          <span className="text-gray-600 hidden md:inline">|</span>
          <a href="https://tiktok.com/@utms25_26" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-sm font-medium">utms25_26</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
