import Image from "next/image"
import Link from "next/link"
import React from "react"
import Logo from "../public/img/sewer-s-crop.png"

const Header = () => {
  return (
    <nav className="h-20 w-full shadow-nav z-40 fixed bg-[#F4F4EF] top-0">
      <div className="container mx-auto h-full flex justify-between items-center px-4 md:px-6">
        <div className="brand">
          <Link className="brand-link" href="/">
            <Image className="" src={Logo} alt="Logo" width={130} height={80} />
          </Link>
        </div>
        <ul className="flex justify-center items-center sm:gap-[1.5rem] gap-[10px] text-[28px] text-[#333] cursor-pointer">
          <Link scroll className="brand-link" href="#how-to-mint">
            how to mint
          </Link>
          <Link scroll className="brand-link" href="/inscribe">
            INSCRIBE
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header
