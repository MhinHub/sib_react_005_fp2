import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title || "Harimart"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Raleway:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      {children}
    </>
  );
}
