import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return { messages };
  } catch (error) {
    // Fallback to default locale if messages file is not found
    const fallbackMessages = (await import(`../messages/en.json`)).default;
    return { messages: fallbackMessages };
  }
});

// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";
// import { supportedLocales } from "@/Manager/navigation";

// // Can be imported from a shared config

// export default getRequestConfig(async ({ locale }) => {
//   if (!supportedLocales.includes(locale)) notFound();

//   try {
//     const messages = (await import(`../messages/${locale}.json`)).default;
//     return { messages };
//   } catch (error) {
//     // Fallback to default locale if messages file is not found
//     const fallbackMessages = (await import(`../messages/en.json`)).default;
//     return { messages: fallbackMessages };
//   }
// });
