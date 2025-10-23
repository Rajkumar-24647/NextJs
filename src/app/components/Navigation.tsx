import Link from "next/link";


export default function Navigation(){
    return (
        <header className="flex gap-12">
     <div>Rajkumar</div>
     <ul className="flex gap-10">
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
        </header>
    )
}