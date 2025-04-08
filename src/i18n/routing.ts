// src/i18n/routing.ts
import { supportedLocales } from "@/src/manager/navigation";
import { defaultLocale } from "@/src/manager/navigation";

import { defineRouting } from "next-intl/routing";
export type SupportedLocale = (typeof supportedLocales)[number];

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: defaultLocale,
});
