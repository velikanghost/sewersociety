import React, { useState } from "react"
import Modal from "react-modal"
import Image from "next/image"
import axios from "axios"
import crypto from "crypto"

Modal.setAppElement("#__next")

const IndexPage = () => {
  const [images, setImages] = useState([])
  const [ipfsHash, setIpfsHash] = useState([])
  const [filteredImages, setFilteredImages] = useState([])
  const [B, setB] = useState([])
  const [loading, setLoading] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

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

      const imagesToShow = imagesIds.filter((image, index) => {
        return !B.includes(hashes[index])
      })

      setFilteredImages(imagesToShow)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleImageHover = (image) => {
    setCurrentImage(image)
    setIsOpen(true)
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 justify-center items-center">
        {images.map((image, index) => {
          const hash = ipfsHash[index]
          return (
            <div key={index} className="image_card">
              <Image
                onMouseEnter={() => handleImageHover(image)}
                src={image}
                alt={`Image with hash ${hash}`}
                className="w-full rounded-md"
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal_content"
        overlayClassName="modal_overlay"
        contentLabel="Image Modal"
      >
        <Image
          src={currentImage}
          alt="Current Image"
          width={500}
          height={500}
        />
      </Modal>
    </div>
  )
}

export default IndexPage
