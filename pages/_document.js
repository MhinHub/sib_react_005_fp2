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
      <Html lang="en" className="scroll-smooth">
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
