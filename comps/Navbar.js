import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src='/vercel.svg' height={20} width={100}></Image>
        </Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/ninjas/"><a>Ninjas</a></Link>
    </nav>
  );
}

export default Navbar;