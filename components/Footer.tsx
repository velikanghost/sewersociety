import React from "react"
import { FiTwitter } from "react-icons/fi"
import { RxDiscordLogo } from "react-icons/rx"

const Footer = () => {
  return (
    <footer className="bg-[#8E8D89] p-[2.2rem] text-center text-white">
      <div className="footer-items">
        <h1 className="m-0 font-medium uppercase">Sewer Society</h1>
        <div className="w-[130px] mx-auto py-[1.2rem]">
          <div className="flex justify-center gap-5 items-center text-[1.5rem]">
            <a className="social-item" href="https://www.twitter.com/">
              <FiTwitter />
            </a>
            <a className="social-item" href="https://discord.gg/">
              <RxDiscordLogo />
            </a>
          </div>
        </div>
        <p>&#169; 2023</p>
      </div>
    </footer>
  )
}

export default Footer
