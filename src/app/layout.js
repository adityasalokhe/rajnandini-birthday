import "./globals.css";

export const metadata = {
  title: "Happy Birthday, Rajnandini ❤️ | A Celebration of You",
  description: "A little world made just for you on your special day.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌹</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FFF9F5] text-[#73545B] antialiased selection:bg-[#F5DDE3] selection:text-[#C98291]">
        {children}
      </body>
    </html>
  );
}
