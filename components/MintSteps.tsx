import React from "react"
import Image from "next/image"

const MintSteps = () => {
  return (
    <section className="how_to_mint">
      <div className="container mx-auto grid sm:grid-cols-2 justify-center items-center gap-[5rem]">
        <div className="right-box">
          <h3 className="font-bold text-center font-semibold text-[32px] font-intro pb-[12px] text-[#e85a4f] uppercase">
          <span className="text-[#333333]">How to</span> Mint
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
