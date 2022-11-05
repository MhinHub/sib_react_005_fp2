import { signIn, signOut, useSession } from 'next-auth/react'

import React from 'react'

export default function Account() {
    const { data: session, status } = useSession()

    console.log(session, status);

    return (
        <section className="">
            <div className=''>
                <a className="btn btn-sm btn-square absolute text-center m-auto right-2 top-2 modal-action" href=''>{ }</a>
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
            </div>
        </section>
    )
}