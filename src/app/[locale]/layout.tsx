import "@/src/app/css/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/src/components/packages/Header/Header";
import Footer from "@/src/components/packages/Footer/Footer";
import { redirect } from "next/navigation";
import { defaultLocale } from "@/src/manager/navigation"; // Import supported locales
import { NextIntlClientProvider } from "next-intl";
import { routing, SupportedLocale } from "@/src/i18n/routing";

// SEO Metadata
import { getMessages, getTranslations } from "next-intl/server";
import { companyDomain } from "@/src/manager/info";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("homePage.metadata");
  const canonicalUrl = `${companyDomain}/${locale}`;

  return {
    metadataBase: new URL(companyDomain),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      description: t("description"),
      url: companyDomain,
      images: [
        {
          url: `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: t("title"),
        },
      ],
    },
  };
}

//fonts
import {
  Oswald,
  Gabriela,
  Great_Vibes,
  Inter,
  Dancing_Script,
} from "next/font/google";
import { CookieBot } from "@/src/lib/hooks/CookieBot";

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

// const greatVibes = Great_Vibes
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font3",
});

//components

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as SupportedLocale)) {
    redirect(`/${defaultLocale}`);
  }

  const messages = await getMessages();

  return (
    <html lang={locale || defaultLocale}>
      <body
        className={` ${inter.className} ${oswald.variable}  ${dancingScript.variable} ${gabriola.variable}   `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
            <Analytics />
            <CookieBot />
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
