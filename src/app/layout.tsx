import { inter } from "./fonts";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <HeaderNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
