import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../utils/firebase-config"


function Nav() {

    const [user, loading] = useAuthState(auth);


    return (
        <nav className="flex justify-between items-center py-10">
            <Link href={"/"}>
                <h1 className="text-3xl font-bold">.WT</h1>
            </Link>

            <ul>
                {!user && (

                    <Link legacyBehavior href={"/auth/Login"}>
                        <a>
                            <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded transition duration-0 hover:duration-700 ease-in-out">
                                Join Now
                            </button>
                        </a>
                    </Link>
                )}
                {user && (
                    <div>
                        <Link href={'/dashboard'}>
                            <img className="rounded-full h-10 w-10"
                                src={user.photoURL}
                                alt={user.displayName + "Avatar"} />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Nav