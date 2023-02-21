import Image from "next/image"
import Link from "next/link"
import React from "react"
import Logo from "../public/img/sewer-s-crop.png"

const Header = () => {
  return (
    <nav className="h-24 w-full shadow-nav z-40 fixed bg-[#F4F4EF] top-0">
      <div className="container mx-auto h-full flex justify-between items-center px-2 sm:px-0">
        <ul className="brand">
          <Link className="brand-link max-w-[40px] relative" href="/">
            <Image src={Logo} alt="Logo" className="" width={150} />
          </Link>
        </ul>
        <ul className="flex justify-center items-center sm:gap-[1.5rem] gap-[10px] sm:text-[1.65rem] text-[20px] text-[#333] cursor-pointer">
          <Link className="brand-link btn btn-shine" href="/sewer">
            inscribe
          </Link>
          <Link className="brand-link btn btn-shine" href="/about-us">
            how to mint
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
