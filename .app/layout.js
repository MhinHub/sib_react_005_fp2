import "../styles/globals.css";

import { persistor, store } from "../context/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  title,
  pageProps: { session },
}) {
  return (
    <html lang="en">
      <head>
        <title>{title || "Hashop"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Raleway:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <SessionProvider session={session}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
