import "@/src/app/globals.css";
import { getTranslations } from "next-intl/server";
import { Analytics } from "@vercel/analytics/react";

// SEO Metadata
import { companyDomain, companyName } from "@/Manager/info";
export async function generateMetadata() {
  const t = await getTranslations("homePage.metadata");
  return {
    metadataBase: new URL(companyDomain),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    openGraph: {
      title: companyName,
      description: t("description"),
      url: companyDomain,
      images: [
        {
          // url: "@/public/images/opengraph-image.jpg",
          width: 800,
          height: 600,
          alt: companyName + companyDomain,
        },
      ],
    },
  };
}

//fonts
import { Oswald, Gabriela, Great_Vibes, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font1",
});

const gabriola = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font3",
});

//components

import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";
import LowerFoot from "@/src/components/LowerFooter/LowerFoot";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function LangLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body
        className={` ${inter.className} ${oswald.variable}  ${greatVibes.variable} ${gabriola.variable}   `}
      >
        <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
          <Header />
          {children}
          <Analytics />
          <Footer />
          <LowerFoot />
        </div>
      </body>
    </html>
  );
}
