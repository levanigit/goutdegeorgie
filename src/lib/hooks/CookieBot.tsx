// src/components/UsercentricsScripts.tsx
"use client";
import { cookiesId } from "@/src/manager/info";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export function CookieBot() {
  return (
    <>
      {cookiesId ? (
        <>
          <GoogleTagManager gtmId={cookiesId} />
          <Script
            src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
            strategy="beforeInteractive"
          />
          <Script
            id="usercentrics-cmp"
            src="https://web.cmp.usercentrics.eu/ui/loader.js"
            data-settings-id={cookiesId}
            strategy="beforeInteractive"
          />
        </>
      ) : null}
    </>
  );
}

// export const cookiesId = ""; // levanydze https://admin.usercentrics.eu/#/v3/implementation/script-tag?settingsId=91B5hGIps1EnBH

/* <CookieBot />; */
