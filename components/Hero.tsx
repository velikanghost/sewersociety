import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <section className="hero mt-[80px]">
      <div className="container mx-auto grid grid-cols-2 justify-center items-center gap-[5rem] text-white">
        <div className="w-full">
          <Image
            className="w-full"
            src="/img/shit1.png"
            height={300}
            width={300}
            alt="hero_img"
          />
        </div>
        <div className="right-box">
          <h3 className="font-bold font-intro text-[48px] pb-[12px] text-[#e85a4f] uppercase">
            Sewer Society
          </h3>
          <p className="text-[21px] text-[#8E8D86]">
          From the sewers we rise. 10000 strong, the 3rds represent 
          a new wave and movement. Permanently inscribed on bitcoin using 
          ordinals, sewer society is whatever you want(choose) it to be, 
          a new world, a form of expression, a meme, a story passed down 
          through generations, proof that you were here.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
