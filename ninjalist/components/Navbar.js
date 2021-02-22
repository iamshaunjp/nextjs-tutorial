import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <h1>Ninja List</h1> */}
                {/* <img src="/globe.svg" alt="Globe" className="logo-img" /> */}
                <Image src="/globe.svg" width={60} height={60} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas/"><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;