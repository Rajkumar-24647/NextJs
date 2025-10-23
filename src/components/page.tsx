import Link from "next/link";

export default function Navbar(){
    return (
        <div>
            <ul className="flex gap-16">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}