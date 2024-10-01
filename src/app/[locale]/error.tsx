"use client";
import Link from "next/link";

// Static metadata

export default function Error() {
  return (
    <section className={`section section-dark`}>
      <div className="container">
        <div
          style={{
            textAlign: "center",
            margin: "0 auto",
            padding: "50px 20px",
            maxWidth: "600px",
          }}
        >
          <h1 className="heading2">404</h1>
          <h2 className="heading3">Oops! Something Went Wrong</h2>
          <p className="paragraph">
            The page you're looking for doesn't exist or has been moved. Please
            return to the homepage and continue exploring.
          </p>
          <Link href="/" className={`button`}>
            Back To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
}

// MUST FIX
