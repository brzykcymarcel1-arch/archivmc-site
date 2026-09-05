import "./globals.css";

export const metadata = {
  title: "ArchivMC.pl - Nowa Edycja 1.21",
  description: "Najsurowszy serwer Minecraft Survival 1.21",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-[#090d16] text-white antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}