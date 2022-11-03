import { signIn, signOut, useSession } from 'next-auth/react'

import React from 'react'
import styles from '../styles/Home.module.css'

export default function Account() {
    const { data: session, status } = useSession()

    console.log(session, status);

    return (
        <main className={styles.main}>
            {session ? (
                <>
                    Signed in as {session.user.name} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            ) : (
                <>
                    Not signed in <br />
                    <button onClick={() => signIn()}>Sign in</button>
                </>
            )}
        </main>
    )
}