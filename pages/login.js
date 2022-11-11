import { signIn, signOut, useSession } from 'next-auth/react'

import React from 'react'
import Navbar from '../components/Nav'

export default function Account() {
    const { data: session, status } = useSession()

    // console.log(session, status);

    return (
      <>
        <Navbar />
        <section className="justify-center items-center content-center align-middle">
          <div className="text-center text-2xl h-1/2 w-1/2 m-auto">
            {/* <a className="btn btn-sm btn-square absolute text-center m-auto right-2 top-2 modal-action" ''>{ }</a> */}
            {session ? (
              <>
                Signed in as {session.user.name} <br />
                <button className="btn" onClick={() => signOut()}>
                  Sign out
                </button>
              </>
            ) : (
              <>
                Not signed in <br />
                <button className="btn" onClick={() => signIn()}>
                  Sign in
                </button>
              </>
            )}
          </div>
        </section>
      </>
    );
}