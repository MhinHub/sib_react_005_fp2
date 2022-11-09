import { getSession, signOut, useSession } from 'next-auth/react'
import Navbar from '../components/Nav'

import React from 'react'

export default function account() {
    const { data: session, status } = useSession()

    return (
        <>
            <Navbar />
        <main className="">
            {status === "authenticated" && (
                <>
                    <h2>Welcome back {session.user.name}</h2>
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }

    return {
        props: { session }
    }
}