import createMiddleware from "next-intl/middleware";
import { routing } from "@/src/i18n/routing"; // your routing config

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all routes except API or static files:
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};
