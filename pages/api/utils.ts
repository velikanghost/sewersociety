import React, { useState, useEffect, useMemo } from "react"
import axios from "axios"
import crypto from "crypto"
import Image from "next/image"
import { saveAs } from "file-saver"
import ReactPaginate from "react-paginate"

const PAGE_SIZE = 20

const Ex = () => {
  const [ipfsHashes, setIpfsHashes] = useState<{ [key: string]: string }>({})
  const [images, setImages] = useState<string[]>([])
  const [filteredImages, setFilteredImages] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(0)

  const B = [
    "7fa435c44774ca1daa3bcfa6e23e896f",
    "a7124ce154c604df483961d588dde49c",
  ]

  const generateImagesIds = useMemo(() => {
    const imagesIds = []
    for (let i = 0; i < 7000; i++) {
      imagesIds.push(
        `https://bafybeifrjlra6j65ehypogugqcdtfwa2axunyatcdxj6emomfrsjw3brdu.ipfs.nftstorage.link/${i}.png`
      )
    }
    return imagesIds
  }, [])

  useEffect(() => {
    setLoading(true)

    const startIndex = currentPage * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE

    const imagesIds = generateImagesIds.slice(startIndex, endIndex)

    setImages(imagesIds)

    const getIpfsHashes = async () => {
      try {
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
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getIpfsHashes()
  }, [currentPage, generateImagesIds])

  useEffect(() => {
    const imagesToShow = images.filter((image) => {
      const hash = ipfsHashes[image]
      return B.includes(hash)
    })
    setFilteredImages(imagesToShow)
  }, [ipfsHashes, images])

  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }
}

//770ed3979f3d9ab37c8e2f118774b478
