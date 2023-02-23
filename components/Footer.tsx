import React from "react"
import { FiTwitter } from "react-icons/fi"
import { RxDiscordLogo } from "react-icons/rx"
import Image from "next/image"
import footerLogo from "../public/img/sewer-footer.png"

const Footer = () => {
  return (
    <footer className="w-full bg-[#474744] text-center text-white">
      <div className="container mx-auto px-4 md:px-6 h-[160px] xl:h-[200px] md:h-[180px] flex justify-between items-center">
        <div className="footer-logo">
          <Image
            className="xl:w-52"
            src={footerLogo}
            alt="Footer Logo"
            width={130}
            height={100}
          />
        </div>
        <div className="w-[130px] flex flex-col items-end justify-end pb-[.5rem] pt-[1.2rem]">
          <div className="flex justify-end gap-5 items-center text-bodybg text-[1.5rem]">
            <a className="social-item" href="https://www.twitter.com/">
              <FiTwitter />
            </a>
            <a className="social-item" href="https://discord.gg/">
              <RxDiscordLogo />
            </a>
          </div>
          <p className="text-bodybg text-xs pt-3">&#169; 2023 Sewer Society</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
