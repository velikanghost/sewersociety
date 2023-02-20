import Head from "next/head"
import Image from "next/image"
import React, { CSSProperties, useEffect, useState } from "react"
import axios from "axios"
import crypto from "crypto"
import HashLoader from "react-spinners/HashLoader"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MintSteps from "../components/MintSteps"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

export default function Home() {
  const [ordHash, setOrdHash] = useState<any[]>([])
  const [ipfsHash, setIpfsHash] = useState<any[]>([])
  const [images, setImages] = useState<any[]>([])
  const [filteredImages, setFilteredImages] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const getOrdHash = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://ordapi.xyz/feed")
        const feed = response.data
        const inscriptions = feed.rss.channel.item
        const itemIds = inscriptions.map((item) => {
          const preview = item.guid
          return `https://ordapi.xyz/preview${preview.replace(
            "/inscription",
            ""
          )}`
        })

        const hashes = await Promise.all(
          itemIds.map(async (link) => {
            const response = await axios.get(link, {
              responseType: "arraybuffer",
            })
            const buffer = Buffer.from(response.data)
            return crypto.createHash("md5").update(buffer).digest("hex")
          })
        )

        setOrdHash(hashes)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getOrdHash()
  }, [])

  useEffect(() => {
    const getIpfsHash = async () => {
      const imageNames = ["0.png", "1.png", "2.png", "3.png", "4.png"]
      try {
        setLoading(true)
        const imagesIds = imageNames.map((image) => {
          return `https://ipfs.io/ipfs/QmeF1xZ7x2EDn4duY7zAdrn7aY6vdwZB9bErxjkfPTaB4Q/${image}`
        })

        setImages(imagesIds)

        const hashes = await Promise.all(
          imagesIds.map(async (link) => {
            const response = await axios.get(link, {
              responseType: "arraybuffer",
            })
            const buffer = Buffer.from(response.data)
            return crypto.createHash("md5").update(buffer).digest("hex")
          })
        )

        setIpfsHash(hashes)

        // Check if elements of ipfsHash are in B and then display images of hashes that are not in B
        const imagesToShow = imagesIds.filter((image, index) => {
          return !B.includes(hashes[index])
        })

        console.log("Images to show: ", imagesToShow)
        setFilteredImages(imagesToShow)
        setLoading(false)
        // Do something with the imagesToShow array, like setting it to state to display the images
      } catch (error) {
        console.log(error)
      }
    }

    getIpfsHash()
  }, [])

  const B = [
    "7fa435c44774ca1daa3bcfa6e23e896f",
    "29e7650a0a8324a78a1f2fa30ffe02fd",
    "a7124ce154c604df483961d588dde49c",
    "437a92881c141132ea5e96f57bc2618b",
    "ee2596c2cc82186c9881c9f826a08916",
  ]

  return (
    <>
      <Head>
        <title>Sewer Society</title>
        <meta name="description" content="My Images" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <MintSteps />
        <div className="h-screen mt-[80px] container mx-auto ">
          {loading ? (
            <div className="loader grid justify-center items-center p-3 h-full">
              <HashLoader
                color="#62DEC3"
                cssOverride={override}
                size={170}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="text-center font-bold">One moment...</p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-5 h-full justify-center items-center ">
                {images.map((image, index) => {
                  const hash = ipfsHash[index]
                  return (
                    <div key={index} className="card">
                      <Image
                        src={image}
                        alt={`Image with hash ${hash}`}
                        width={300}
                        height={300}
                        style={{
                          filter: B.includes(hash) ? "grayscale(1)" : "none",
                        }}
                      />
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
        <Footer />
      </main>
    </>
  )
}
