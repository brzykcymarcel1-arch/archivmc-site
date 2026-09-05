import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-wider bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
          ARCHIVMC.PL
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="#features" className="hover:text-sky-400 transition-colors">Tryby</Link>
          <Link href="#store" className="hover:text-sky-400 transition-colors">Sklep</Link>
          <Link href="#discord" className="hover:text-sky-400 transition-colors">Discord</Link>
        </nav>
      </div>
    </header>
  );
}