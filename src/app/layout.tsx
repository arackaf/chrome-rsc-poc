import { Content } from "./Content";

const delay = () => new Promise((res) => setTimeout(res, 100));

async function getChrome() {
  await delay();
  return `
    <h1>Shadow DOM content</h1>
    <slot></slot>
    <h1>More Shadow DOM content</h1>
  `;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const chromeContent = await getChrome();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div>
          <Content chromeContent={chromeContent} />
          <span>This is light dom content</span>
        </div>

        {children}

        <footer>RSC FOOTER</footer>
      </body>
    </html>
  );
}
