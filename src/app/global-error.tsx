"use client";
import Link from "next/link";
import "@/src/app/globals.css";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body
        style={{
          backgroundColor: "var(--color4)", // Apply dark blue background
          color: "var(--color2)", // Apply yellow text color
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          margin: 0,
        }}
      >
        <h2 className="heading4 color2">Oops, Something went wrong!</h2>
        <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
          <button className="button" onClick={() => reset()}>
            Try again
          </button>
          <Link className="button button-reverse" href="/">
            Back To Home
          </Link>
        </div>
      </body>
    </html>
  );
}
