"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const ip = "play.archivmc.pl";

  const copyIP = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-wider bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
          ARCHIVMC.PL
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <Link href="#start" className="hover:text-white transition-colors">Strona Główna</Link>
          <Link href="#about" className="hover:text-white transition-colors">O Serwerze</Link>
        </nav>
        <button 
          onClick={copyIP}
          className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
        >
          {copied ? "Skopiowano IP!" : "Skopiuj IP"}
        </button>
      </div>
    </header>
  );
}