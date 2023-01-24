"use client";

import { FC, useState } from "react";

export const Content: FC<{ chromeContent: string }> = (props) => {
  const { chromeContent } = props;
  const isServer = typeof window === "undefined";
  const [num, setNum] = useState(0);

  return (
    <>
      {isServer ? <template shadowroot="open" dangerouslySetInnerHTML={{ __html: chromeContent }} /> : null}
      {num} <button onClick={() => setNum((x) => x + 1)}>Inc</button>
    </>
  );
};
