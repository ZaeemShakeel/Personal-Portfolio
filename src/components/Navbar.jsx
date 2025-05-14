import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/zs.png"
import { FaSquareFacebook } from "react-icons/fa6"
import {motion} from "framer-motion"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/zaeem-shakeel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"><FaLinkedin/> </a>
            <a href="https://github.com/ZaeemShakeel" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"><FaGithub/> </a>
            <a href="https://www.instagram.com/zaeem_shakeel/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"><FaInstagram/> </a>
            <a href="https://www.facebook.com/share/T9JfrFcjC8TXHzKp/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"><FaSquareFacebook/> </a>
        </div>
    </nav>
  )
}

export default Navbar