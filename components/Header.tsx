import Image from "next/image"
import Link from "next/link"
import React from "react"
import Logo from "../public/img/sewer-s-crop.png"

const Header = () => {
  return (
    <nav className="h-20 w-full shadow-nav z-40 fixed bg-[#F4F4EF] top-0">
      <div className="container mx-auto h-full flex justify-between items-center px-6 xl:px-0">
        <ul className="brand">
          <Link className="brand-link" href="/">
            <Image
              className="h-[80px]"
              src={Logo}
              alt="Logo"
              width={130}
              height={80}
            />
          </Link>
        </ul>
        <ul className="flex justify-center items-center sm:gap-[1.5rem] gap-[10px] sm:text-[1.65rem] text-[20px] text-[#333] cursor-pointer">
          <Link scroll className="brand-link btn btn-shine" href="#how-to-mint">
            how to mint
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
