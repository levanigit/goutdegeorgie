export const supportedLocales = ["fr", "en", "de", "it"];
export const defaultLocale = supportedLocales[0];

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
  dropdown?: { title: string; url: string }[]; // Optional dropdown array
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

//  en: [
//     { title: "Home", url: "/" },
//     {
//       title: "Services",
//       url: "/services",
//       dropdown: [
//         { title: "Renovation", url: "/renovation" },
//         { title: "Flooring", url: "/flooring" },
//         { title: "Furniture Assembling", url: "/furniture-assembly" },
//         { title: "Gardening", url: "/gardening" },
//       ],
//     },
//     { title: "Projects", url: "/projects" },
//     { title: "About Us", url: "/about" },
//     { title: "Contact", url: "/contact", button: true },
//   ],
