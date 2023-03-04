import Container from "@/components/container"
import NAVLINKS from "@/constant/navlink"
import ImgLogo from "image/logo.png"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return ( 
    <Container className="py-6 flex justify-between items-center">
        <Image src={ImgLogo} alt="ImgLogo"/>
        <nav>
            <ul className="flex">
                {NAVLINKS.map(link =>
                   <li>
                        <Link className="text-md py-2 px-6" key={link.url} href={link.url}>
                            {link.name}
                        </Link>
                   </li> 
                )}
            </ul>
            
        </nav>
    </Container>
    )
}

export default Header