"use client";

import Link from "next/link";

import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState(0);

  return (
    <main style={{ margin: "100px" }}>
      <nav style={{ margin: "50px" }}>
        <Link href="/">Root</Link>
        &nbsp; &nbsp; &nbsp;
        <Link href="/legacy">Legacy</Link>
      </nav>
      <div>INFO PAGE</div>
      {val}
      <button onClick={() => setVal((x) => x + 1)}>Inc</button>
    </main>
  );
}
