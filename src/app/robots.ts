import { MetadataRoute } from "next";
import { companyDomain } from "@/src/manager/info";
import { supportedLocales } from "@/src/manager/navigation"; // Import the supported languages

export default function robots(): MetadataRoute.Robots {
  // Check if companyDomain and supportedLocales are valid
  if (
    !companyDomain ||
    !Array.isArray(supportedLocales) ||
    supportedLocales.length === 0
  ) {
    throw new Error(
      "Invalid configuration for company domain or supported locales"
    );
  }

  // Generate sitemaps for each supported language
  const sitemaps = supportedLocales.map((locale) => {
    // Ensure we correctly format the sitemap URL
    return `${companyDomain}/${locale}/sitemap.xml`;
  });

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // Allow everything unless explicitly disallowed
        disallow: ["/private/", "/admin/", "/api/"], // Disallowed paths
      },
    ],
    sitemap: sitemaps, // Provide the array of sitemap URLs
  };
}
