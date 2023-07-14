import { Montserrat, Inter } from "next/font/google";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./globals.css";

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["cyrillic"],
});

const inter = Inter({
  display: "swap",
  subsets: ["cyrillic"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
