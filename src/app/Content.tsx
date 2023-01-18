"use client";

import { FC, useState } from "react";

export const Content: FC<{}> = () => {
  const isServer = typeof window === "undefined";
  const [num, setNum] = useState(0);

  return (
    <>
      {isServer ? (
        <template shadowroot="open">
          <h1>Shadow DOM content</h1>
          <slot></slot>
          <h1>More Shadow DOM content</h1>
        </template>
      ) : null}
      {num} <button onClick={() => setNum((x) => x + 1)}>Inc</button>
    </>
  );
};
