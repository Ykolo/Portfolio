import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page" style={{ display: "grid", placeItems: "center", minHeight: "80vh" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "clamp(60px,16vw,180px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: "var(--brand)",
          }}
        >
          404
        </div>
        <Link className="btn" style={{ marginTop: 24 }} href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
