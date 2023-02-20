import Image from "next/image"
import React from "react"

const Hero = () => {
  return (
    <section className="hero mt-[80px]">
      <div className="container mx-auto grid grid-cols-2 justify-center items-center gap-[5rem] text-white">
        <div className="w-full">
          <Image
            className="w-full"
            src="/img/shit1.JPG"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero
            sem, molestie id leo pulvinar, interdum fermentum sapien. Vestibulum
            malesuada lectus vitae aliquam laoreet. Pellentesque eu mollis
            neque. Sed pharetra diam lectus, ac porta tortor pellentesque et.
            Etiam at tincidunt augue, ac dapibus nisl. Quisque aliquet dignissim
            lacus, id ultrices massa ullamcorper eu. Mauris ac nisi vitae dolor
            tincidunt eleifend. Pellentesque elit felis, congue sed tincidunt
            vitae, ullamcorper quis nulla. Fusce et nulla egestas, sagittis
            velit et, laoreet ante. Aenean fringilla, ante vel auctor rutrum,
            sem tortor euismod purus, id malesuada odio elit at massa. Proin eu
            cursus mi. Pellentesque eu nibh sollicitudin, maximus ipsum sed,
            feugiat mauris.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
