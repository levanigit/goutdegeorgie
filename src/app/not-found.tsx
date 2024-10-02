import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html>
      <body
        style={{
          backgroundColor: "var(--color4)", // Dark blue background
          color: "var(--color2)", // Yellow text color
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          margin: 0,
        }}
      >
        <h2 className="heading2 color2">404 - Page Not Found</h2>

        <p
          className="paragraph"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          We could not find the requested resource.
        </p>
        <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
          <Link className="button button-reverse" href="/">
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
