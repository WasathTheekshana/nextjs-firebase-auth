import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase-config'
import { useRouter } from 'next/router'

function dashboard() {
    const [user, loading] = useAuthState(auth);

    const route = useRouter();

    useEffect(() => {
        if (!user) {
            route.push('/auth/Login')
        }
    }, [])

    const signOut = async () => {
        await auth.signOut()
        route.push('/auth/Login')
    }

    if (loading) return <h1>Loading...</h1>

    if (user)
        return (
            <div>
                <h1>Welcome to Dashboard {user.displayName} </h1>
                <button onClick={signOut} className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded transition duration-0 hover:duration-700 ease-in-out">
                    Sign Out
                </button>
            </div>
        )
}

export default dashboard