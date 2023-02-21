import React from "react"
import Image from "next/image"

const MintSteps = () => {
  return (
    <section id="how-to-mint" className="how_to_mint mt-10">
      <div className="container mx-auto grid sm:grid-cols-2 justify-center items-center gap-[3rem] px-4 md:px-6">
        <div className="right-box row-start-2 sm:row-start-1">
          <h3 className="font-bold text-left text-4xl sm:text-[48px] font-intro pb-[12px] text-[#e85a4f] uppercase">
            <span className="text-bodytext">How to</span> Mint
          </h3>
          <p>
            Vestibulum ullamcorper lacus et massa molestie, vitae semper nisi
            efficitur. In id orci lectus. Duis vitae lorem justo. Nullam tempor
            ante vitae orci pulvinar lobortis. Etiam tincidunt laoreet vehicula.
            Suspendisse potenti. In mattis est non nulla euismod, at porta arcu
            viverra. Duis elementum gravida neque et luctus. Mauris dignissim
            molestie lectus sodales viverra. Aenean at mattis mi. Etiam non urna
            ut tortor rhoncus auctor.
          </p>
          <br />
          <p>
            Vestibulum ullamcorper lacus et massa molestie, vitae semper nisi
            efficitur. In id orci lectus. Duis vitae lorem justo. Nullam tempor
            ante vitae orci pulvinar lobortis. Etiam tincidunt laoreet vehicula.
            Suspendisse potenti. In mattis est non nulla euismod, at porta arcu
            viverra. Duis elementum gravida neque et luctus. Mauris dignissim
            molestie lectus sodales viverra. Aenean at mattis mi. Etiam non urna
            ut tortor rhoncus auctor.
          </p>
          <br />
          <p>
            Vestibulum ullamcorper lacus et massa molestie, vitae semper nisi
            efficitur. In id orci lectus. Duis vitae lorem justo. Nullam tempor
            ante vitae orci pulvinar lobortis. Etiam tincidunt laoreet vehicula.
            Suspendisse potenti. In mattis est non nulla euismod, at porta arcu
            viverra. Duis elementum gravida neque et luctus. Mauris dignissim
            molestie lectus sodales viverra. Aenean at mattis mi. Etiam non urna
            ut tortor rhoncus auctor.
          </p>
        </div>

        <div className="w-full">
          <Image
            className="w-full"
            src="/img/shit2.png"
            height={300}
            width={300}
            alt="hero_img"
          />
        </div>
      </div>
    </section>
  )
}

export default MintSteps
