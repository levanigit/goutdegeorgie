import Link from "next/link";

export default function Custom404() {
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
          <h1 className="heading3">404 - Page Not Found</h1>
          <p className="paragraph">
            The page you are looking for could not be found. Return to our
            homepage to discover the finest Italian specialties in Geneva.
          </p>
          <Link href="/" className={`button`}>
            Back To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
}
