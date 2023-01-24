import Link from "next/link";

export default function () {
  return (
    <section>
      <nav>
        <Link href="/">Root</Link>
        &nbsp; &nbsp; &nbsp;
        <Link href="/info">Info</Link>
      </nav>

      <div>OLD PAGE</div>

      <br />
      <br />
      <br />
    </section>
  );
}
