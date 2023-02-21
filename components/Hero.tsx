import Image from "next/image"
import { FiTwitter } from "react-icons/fi"
import { RxDiscordLogo } from "react-icons/rx"

const Hero = () => {
  return (
    <section className="hero mt-28">
      <div className="container mx-auto grid sm:grid-cols-2 justify-center items-center gap-[3rem]  px-4 md:px-6">
        <div className="w-full">
          <Image
            className="w-full"
            src="/img/shit1.png"
            height={300}
            width={300}
            alt="hero_img"
          />
        </div>
        <div className="right-boxsm:px-0">
          <h3 className="font-bold font-intro text-4xl sm:text-[48px] pb-[12px] text-[#e85a4f] uppercase">
            Sewer <span className="text-bodytext">Society</span>
          </h3>
          <p className="text-base sm:text-[21px] text-bodytext text-justify cursor-default leading-[153%] xl:leading-[180%]">
            From the sewers we rise. 10000 strong, the 3rds represent a new wave
            and movement. Permanently inscribed on bitcoin using ordinals, sewer
            society is whatever you want(choose) it to be, a new world, a form
            of expression, a meme, a story passed down through generations,
            proof that you were here.
          </p>
          {/* Socials */}
          <div className="flex gap-2 mt-6">
            {[
              {
                icon: FiTwitter,
                path: "https://www.twitter.com/",
                text: "Follow us",
                color: "#00aaec",
              },
              {
                icon: RxDiscordLogo,
                path: "https://www.twitter.com/",
                text: "Join us",
                color: "#5865f2",
              },
            ].map(({ icon, path, text, color }, idx) => {
              const Icon = icon
              return (
                <a
                  key={idx}
                  className={`btn btn-shine flex items-center gap-2 text-[#5A5B59] text-base sm:text-[21px]`}
                  href={path}
                >
                  {text} <Icon color={color} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
