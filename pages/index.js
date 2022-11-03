import CardContent from "../components/CardContent";
import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Raleway:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <div>
                <h1>Home</h1>
                <Link href="/account">
                    Login
                </Link>
                <div className="grid grid-cols-3 w-screen my-8">
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                </div>
            </div>
        </>
    );
}