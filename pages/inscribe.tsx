import axios from "axios"
import Image from "next/image"
import React, { CSSProperties, useEffect, useState } from "react"
import crypto from "crypto"
import HashLoader from "react-spinners/HashLoader"
import { saveAs } from "file-saver"
import Link from "next/link"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Pagination from "../components/Pagination"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

const Inscribe = () => {
  const [, /* ordHash */ setOrdHash] = useState<any[]>([])
  const [ipfsHashes, setIpfsHashes] = useState<{ [key: string]: string }>({})
  const [images, setImages] = useState<string[]>([])
  const [filteredImages, setFilteredImages] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [imgPerPag] = useState<number>(18)

  const B = [
    "7fa435c44774ca1daa3bcfa6e23e896f",
    "a7124ce154c604df483961d588dde49c",
    "437a92881c141132ea5e96f57bc2618b",
    "29e7650a0a8324a78a1f2fa30ffe02fd",
    "ee2596c2cc82186c9881c9f826a08916",
    "3a10add8986659567704c5998d9adb22",
    "3a10add8986659567704c5998d9a4b26",
    "8877f1e626e38aba6b5223adff8285c3",
    "3a10add89866592h7704c5998d9adb22",
    "e22331b50c5699e9c3a154f8d990ff24",
    "9deefc2d3d3f02298e53acf26b6e274f",
    "b2df8f97f3515a5524e2e4cf04cfd647",
    "7e133f79870c72d281ac32745013de5d",
  ]

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
    const getIpfsHashes = async () => {
      try {
        setLoading(true)

        const imagesIds = []
        for (let i = 0; i < 50; i++) {
          imagesIds.push(
            `https://ipfs.io/ipfs/QmeF1xZ7x2EDn4duY7zAdrn7aY6vdwZB9bErxjkfPTaB4Q/${i}.png`
          )
        }

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

        const hashesObject = hashes.reduce((acc, hash, index) => {
          acc[imagesIds[index]] = hash
          return acc
        }, {})
        setIpfsHashes(hashesObject)
        //console.table(hashesObject)

        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getIpfsHashes()
  }, [])

  useEffect(() => {
    const imagesToShow = images.filter((image) => {
      const hash = ipfsHashes[image]
      return B.includes(hash)
    })
    setFilteredImages(imagesToShow)
  }, [ipfsHashes, images])

  // Get current Page
  const lastPage = currentPage * imgPerPag
  const firstPage = lastPage - imgPerPag
  const currentImgs = images.slice(firstPage, lastPage)
  // console.log(lastPage, firstPage, currentPage)

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 py-16 mt-16 h-full">
          {loading ? (
            <div className="loader grid justify-center items-center p-3 h-[450px] xl:h-[600px]">
              <HashLoader
                color="#8E8D89"
                cssOverride={override}
                size={170}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <p className="text-center font-intro font-bold">
                Preparing 3rds...
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center font-intro font-bold text-2xl md:text-3xl text-primary">
                Choose Your 3rd(s)
              </h2>
              <p className="text-center text-secondary text-md mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                volutpat vulputate.
              </p>
              <div className="grid grid-cols-2 gap-2 md:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-7 justify-center items-center">
                {currentImgs.map((image, index) => {
                  const hash = ipfsHashes[image]
                  const isHovered = hoveredImage === index
                  return (
                    <div
                      key={index}
                      className="image_card"
                      onMouseEnter={() => setHoveredImage(index)}
                      onMouseLeave={() => setHoveredImage(null)}
                    >
                      <Image
                        src={image}
                        alt={`Image with hash ${hash}`}
                        className="w-full rounded-md"
                        width={300}
                        height={300}
                        style={{
                          filter: B.includes(hash) ? "grayscale(1)" : "none",
                        }}
                      />
                      {isHovered && !B.includes(hash) && (
                        <div className="overlay">
                          <button
                            className="download-button font-intro"
                            onClick={() => {
                              !B.includes(hash) &&
                                saveAs(
                                  image,
                                  `${image.replace(
                                    "https://ipfs.io/ipfs/QmeF1xZ7x2EDn4duY7zAdrn7aY6vdwZB9bErxjkfPTaB4Q/",
                                    ""
                                  )}`
                                )
                            }}
                          >
                            Download
                          </button>
                          <Link
                            className="copy-link-button font-intro"
                            href="https://inscribe.ordswap.io/"
                          >
                            OrdSwap
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="">
                <Pagination
                  items={images.length}
                  pageSize={imgPerPag}
                  currentPage={currentPage}
                  onPageChange={(page: number) => setCurrentPage(page)}
                />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Inscribe
