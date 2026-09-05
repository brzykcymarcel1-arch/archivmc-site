'use client';

import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-sky-500 selection:text-white">
      <Navbar />
      
      {/* Sekcja powitalna */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-center flex flex-col items-center">
        <span className="px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 rounded-full">
          Najlepszy Serwer Minecraft 1.21.x
        </span>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Witaj na <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">ARCHIVMC.PL</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-gray-400 mb-10">
          Wejdź do wyjątkowego świata pełnego przygód, unikalnych trybów gry oraz wspaniałej społeczności. Dołącz do nas już teraz!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={() => navigator.clipboard.writeText("play.archivmc.pl")}
            className="px-8 py-4 font-bold text-black bg-gradient-to-r from-sky-400 to-indigo-500 rounded-xl hover:opacity-95 transition-all shadow-lg shadow-sky-500/20 active:scale-95 cursor-pointer"
          >
            Skopiuj IP: play.archivmc.pl
          </button>
          
          <a 
            href="#store" 
            className="px-8 py-4 font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
          >
            Odwiedź Sklep
          </a>
        </div>
      </section>

      {/* Sekcja trybów gry */}
      <section id="features" className="py-20 px-4 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl font-bold text-center mb-12">Nasze Tryby Gry</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/5 hover:border-sky-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-sky-400">Survival + Gildie</h3>
            <p className="text-gray-400 text-sm">Klasyczny survival z autorskimi urozmaiceniami i systemem rywalizacji gildyjnej.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/5 hover:border-sky-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-indigo-400">Anarchy SMP</h3>
            <p className="text-gray-400 text-sm">Brak zasad, całkowita swoboda i przetrwanie w najtrudniejszych warunkach.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/5 hover:border-sky-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-2 text-purple-400">RolePlay (VoidiRP)</h3>
            <p className="text-gray-400 text-sm">Wciel się w wybraną postać i twórz własną historię w unikalnym świecie gry.</p>
          </div>
        </div>
      </section>
    </main>
  );
}