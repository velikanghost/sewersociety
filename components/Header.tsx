import Link from "next/link"
import React from "react"
import { FiTwitter } from "react-icons/fi"
import { RxDiscordLogo } from "react-icons/rx"

const Header = () => {
  return (
    <nav className="h-24 w-full shadow-nav z-40">
      <div className="container mx-auto h-full flex justify-between items-center">
        <ul className="brand">
          <Link className="brand-link" href="/">
            <span className="font-bold font-intro  text-[1.6rem] cursor-pointer align-middle uppercase text-[#5A5B59]">
              Sewer Society
            </span>
          </Link>
        </ul>
        <ul className="flex justify-center items-center gap-[1.5rem] text-[1.65rem] text-[#333] cursor-pointer">
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
