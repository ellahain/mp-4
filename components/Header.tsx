import Link from "next/link";

export default function Header() {
    return (
        <nav className="p-2 text-center bg-black text-white">
            <ul className="nav">
                <li className="!m-4">
                    <Link href={"/"} className=" !m-2 text-2xl hover:underline">Home</Link>
                    <Link href={"/artworks"} className="!m-2 pl-4 text-2xl hover:underline border-l-white border-l-2">Artworks</Link>
                </li>
            </ul>
        </nav>
    )
}