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
                    <Link href={"/clientComp"}>clientComp</Link>
                </li>
                <li>
                    <Link href={"/serverComp"}>serverComp</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link href={"/services"}>Services</Link>
                </li>
                <li>
                    <Link href={"/products"}>Products</Link>
                </li>
            </ul>
        </div>
    )
}