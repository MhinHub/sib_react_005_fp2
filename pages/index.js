import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Index() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Home</h1>
            <Link href="/account">
                Login
            </Link>
        </div>
    );
}