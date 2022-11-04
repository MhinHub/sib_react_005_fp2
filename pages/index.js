import CardContent from "../components/CardContent";
import Cart from "../components/Cart"
import Categories from "../components/Categories"
import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";
import React from "react";
import TopProducts from "../components/TopProducts";
import WelcomeSection from "../components/WelcomeSection";

export default function Index() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Raleway:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
            </Head>
            <WelcomeSection />
            <Nav />
            <Cart />
            <Categories />
            <TopProducts />


            {/* <h1>Home</h1>
                <Link href="/account">
                    Login
                </Link>
                <Link href="/cart">
                    Cart
                </Link> */}
            {/* <div className="grid grid-cols-3 w-screen my-8">
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                    <CardContent />
                </div> */}
            {/* <Cart /> */}
        </>
    );
}