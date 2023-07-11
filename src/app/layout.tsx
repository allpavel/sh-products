import { Header } from "./components/Header/Header";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["cyrillic"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
