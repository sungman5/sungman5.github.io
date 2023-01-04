import Link from "next/link";

export default function Nav(){
    return (
        <nav>
            <Link href={'/'}>
                <h1>타이틀</h1>
            </Link>
            <ul>
                <Link href={'/dev'}>Dev</Link>
                {/* <Link>Design</Link>
                <Link>Other</Link> */}
            </ul>
        </nav>
    )
}