import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="start" className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            Nowa Edycja 1.21
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Twój świat. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Twoja historia.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Najsurowszy serwer Minecraft Survival 1.21 bez litości. Dołącz do walki już teraz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#about" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white font-medium px-8 py-3 rounded-xl transition-all shadow-lg shadow-sky-500/20 text-center">
              Dowiedz się więcej
            </a>
            <a href="https://discord.gg/twojlink" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white font-medium px-8 py-3 rounded-xl transition-all text-center">
              Discord
            </a>
          </div>
        </div>
      </main>
      <section id="about" className="py-24 px-4 max-w-4xl mx-auto text-center border-t border-white/5">
        <h2 className="text-3xl font-bold mb-4 text-sky-400">Witaj w piekle</h2>
        <p className="text-zinc-400 leading-relaxed">
          To nie jest zwykły serwer. Tu liczy się przetrwanie, surowy klimat i zgrana społeczność. Zbuduj swoją bazę, stwórz frakcję albo zniknij w zapomnieniu.
        </p>
      </section>
      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-white/5">
        © 2026 ArchivMC.pl. Wszelkie prawa zastrzeżone.
      </footer>
    </>
  );
}