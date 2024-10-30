export const supportedLocales = ["fr", "en", "de", "it"];
export const defaultLocale = "fr";
export const dynamicPageRoute = "menu"; // [slug]
export const fireBaseRoute = "chachaab"; //firebase route
export const menuCarPlaceHoldImg =
  "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true";

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
}

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Home", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "Our Story", url: "/story" },
    { title: "Reservation", url: "/reservation", button: true },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "À propos", url: "/story" },
    { title: "Réservation", url: "/reservation", button: true },
  ],
  de: [
    { title: "Startseite", url: "/" },
    { title: "Speisekarte", url: "/menu" },
    { title: "Über uns", url: "/story" },
    { title: "Reservierung", url: "/reservation", button: true },
  ],
  it: [
    { title: "Home", url: "/" },
    { title: "Menu", url: "/menu" },
    { title: "Chi siamo", url: "/story" },
    { title: "Prenotazione", url: "/reservation", button: true },
  ],
};
