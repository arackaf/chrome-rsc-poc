import Link from "next/link";

export default function Home() {
  return (
    <main style={{ margin: "100px" }}>
      <nav style={{ margin: "50px" }}>
        <Link href="/info">Info</Link>
        &nbsp; &nbsp; &nbsp;
        <Link href="/legacy">Legacy</Link>
      </nav>
      <div>ROOT CONTENT</div>
    </main>
  );
}
