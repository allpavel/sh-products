import { Header } from "./components/Header/Header";
import { Montserrat, Inter } from "next/font/google";
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
        <footer>hello</footer>
      </body>
    </html>
  );
}
