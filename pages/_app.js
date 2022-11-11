import "../styles/globals.css";

import { persistor, store } from "../context/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import NextNprogress from "nextjs-progressbar";
import React from "react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NextNprogress
            color="#bca6ff"
            options={{ showSpinner: false }}
            delay={100}
            showOnShallow={true}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
