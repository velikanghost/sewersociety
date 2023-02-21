import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FiTwitter } from "react-icons/fi"
import { RxDiscordLogo } from "react-icons/rx"
import Logo from "../public/img/sewer-logo.jpg"

const Header = () => {
  return (
    <nav className="h-24 w-full shadow-nav z-40 fixed bg-[#F4F4EF] top-0">
      <div className="container mx-auto h-full flex justify-between items-center px-2 sm:px-0">
        <ul className="brand">
          {/* <Link className="brand-link" href="/">
            <span className="font-bold font-intro  text-[1.6rem] cursor-pointer align-middle uppercase text-[#5A5B59]">
              Sewer Society
            </span>
          </Link> */}
          <Link className="brand-link" href="/">
            <Image src={Logo} alt="Logo" width={130} height={100} />
          </Link>
        </ul>
        <ul className="flex justify-center items-center sm:gap-[1.5rem] gap-[10px] sm:text-[1.65rem] text-[20px] text-[#333] cursor-pointer">
          <Link className="brand-link" href="#how-to-mint">
            how to mint
          </Link>
          <Link className="brand-link" href="/inscribe">
            inscribe
          </Link>
          {/* Socials */}
          <a className="list-item" href="https://www.twitter.com/">
            <FiTwitter />
          </a>
          <a className="list-item" href="https://discord.gg/">
            <RxDiscordLogo />
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Header
