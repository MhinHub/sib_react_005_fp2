import "../styles/globals.css";

import { persistor, store } from "../context/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </SessionProvider>
    );
}