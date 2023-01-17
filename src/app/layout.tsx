const delay = () => new Promise((res) => setTimeout(res, 100));

async function getChrome() {
  await delay();
  return `
    <h1 style="color: red;">App Header</h1>
  `;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerContent = await getChrome();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <header dangerouslySetInnerHTML={{ __html: headerContent }}></header>

        {children}

        <footer>RSC FOOTER</footer>
      </body>
    </html>
  );
}
