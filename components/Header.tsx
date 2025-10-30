import Link from "next/link";

export default function Header() {
    return (
        <nav className="p-2 mx-auto text-center bg-black text-white">
            <ul className="nav">
                <li className="m-2">
                    <Link href={"/"} className="p-1 m-2 text-2xl x- hover:underline">Home</Link>
                    <Link href={"/artworks"} className="p-1 m-2 text-2xl x-1 hover:underline">Artworks</Link>
                </li>
            </ul>
        </nav>
    )
}