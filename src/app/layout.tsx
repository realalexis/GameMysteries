import { Plus_Jakarta_Sans, Source_Serif_4, Work_Sans } from "next/font/google";

import "../styles/globals.css";
import "swiper/css";
import useMode, { Providers } from "../utils/themeMode";
import { GlobalProvider } from "../context/store";
import { Header } from "../component/ui/header";
import { headerData } from "../data/headerData";

const Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const work_Sans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const source_Serif_Pro = Source_Serif_4({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-pro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}
    >
      <body>
        <Providers>
          <GlobalProvider>
            <Header headerData={headerData} useMode={useMode} />
            {children}
          </GlobalProvider>
        </Providers>
      </body>
    </html>
  );
}
