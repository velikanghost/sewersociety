import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <section className="hero my-[80px]">
      <div className="container mx-auto grid sm:grid-cols-2 justify-center items-center gap-[5rem]">
        <div className="w-full">
          <Image
            className="w-full"
            src="/img/shit1.png"
            height={300}
            width={300}
            alt="hero_img"
          />
        </div>
        <div className="right-box px-2 sm:px-0">
          <h3 className="font-bold font-intro text-4xl sm:text-[48px] pb-[12px] text-[#e85a4f] uppercase">
            Sewer <span className="text-[#333333]">Society</span>
          </h3>
          <p className="text-base sm:text-[21px] text-[#8E8D89] text-justify">
            From the sewers we rise. 10000 strong, the 3rds represent a new wave
            and movement. Permanently inscribed on bitcoin using ordinals, sewer
            society is whatever you want(choose) it to be, a new world, a form
            of expression, a meme, a story passed down through generations,
            proof that you were here.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
