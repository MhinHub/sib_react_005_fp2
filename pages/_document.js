import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const originalRenderPage = ctx.renderPage;

  //   // Run the React rendering logic synchronously
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       // Useful for wrapping the whole react tree
  //       enhanceApp: (App) => App,
  //       // Useful for wrapping in a per-page basis
  //       enhanceComponent: (Component) => Component,
  //     });

  //   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  //   const initialProps = await Document.getInitialProps(ctx);

  //   return initialProps;
  // }
  render() {
    return (
      <Html lang="en" className="scroll-smooth" data-theme="wireframe">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <meta name="theme-color" content="#bca6ff" />
          <meta name="msapplication-navbutton-color" content="#bca6ff" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#bca6ff"
          />
          <meta
            name="description"
            content="Hashop is best of the best best online shopping website app with the best fashion products for unisex also with accessories and electronics as well."
          />
          <meta
            name="keywords"
            content="hashop, hashop ecommerce, hashop shop, ecommerce, online shopping, online shop, online store, online ecommerce, online ecommerce shop, online ecommerce store, online ecommerce website, online ecommerce app, online ecommerce application, online ecommerce platform, online ecommerce software, online ecommerce solution, minimalist online ecommerce design system, online ecommerce website, online ecommerce website, online ecommerce website design, online ecommerce website development, online ecommerce website template, online ecommerce website app, online ecommerce website app free, online ecommerce website app, online ecommerce website app react with css, online ecommerce website app react with next js online ecommerce website app react with next js, online ecommerce website app react with next js redux toolkit, minimalist online ecommerce website app react with next js redux toolkit tailwind, online ecommerce website app react with next js redux toolkit tailwind responsive, online ecommerce website app react with next js redux toolkit tailwind responsive free, online ecommerce website app react with next js redux toolkit tailwind responsive, online ecommerce website app react with next js redux toolkit tailwind responsive 2022, online ecommerce website app react with next js redux toolkit tailwind responsive 2022, online ecommerce website"
          />
          <meta
            name="author"
            content="Muhaemin Iskandar, Hacktiv8 - Kampus Merdeka"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hashop - Ecommerce app" />
          <meta
            property="og:description"
            content="Hashop is best of the best best online shopping website app with the best fashion products for unisex also with accessories and electronics as well."
          />
          <meta property="og:image" content="/icon-192x192.png" />
          <meta property="og:url" content="https://hashop-store.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hashop - Ecommerce app" />
          <meta
            name="twitter:description"
            content="Hashop is best of the best best online shopping website app with the best fashion products for unisex also with accessories and electronics as well."
          />
          <meta name="twitter:image" content="/icon-192x192.png" />
          <meta name="twitter:image:alt" content="Hashop" />
          <meta
            name="twitter:domain"
            content="https://hashop-store.vercel.app/"
          />
          <meta
            name="twitter:app:url:iphone"
            content="https://hashop-store.vercel.app/"
          />
          <meta
            name="twitter:app:url:ipad"
            content="https://hashop-store.vercel.app/"
          />

          <meta name="twitter:app:country" content="US" />
          <meta name="twitter:app:country" content="ID" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta
            name="google-site-verification"
            content="7KgkV67H12Dm3cvEblpXUAYgoT9BpUzCN8Cw-JXVQjc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
