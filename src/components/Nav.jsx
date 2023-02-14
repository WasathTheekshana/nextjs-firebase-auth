import Link from "next/link"


function Nav() {
    return (
        <nav>
            <Link href={"/"}>.WT</Link>
            <ul>
                <Link legacyBehavior href={"/auth/login"}>
                    <a className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-9">
                        Join Now
                    </a>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav