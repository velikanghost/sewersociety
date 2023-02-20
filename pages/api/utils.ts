import axios from "axios"
import crypto from "crypto"

export const getOrdHash = async () => {
  try {
    const response = await axios.get("https://ordapi.xyz/feed")
    const feed = response.data
    const inscriptions = feed.rss.channel.item
    const itemIds = inscriptions.map((item) => {
      const preview = item.guid
      return `https://ordapi.xyz/preview${preview.replace("/inscription", "")}`
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

    return hashes
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getIpfsHash = async () => {
  const imageNames = ["0.png", "1.png", "2.png", "3.png", "4.png"]
  try {
    const imagesIds = imageNames.map((image) => {
      return `https://ipfs.io/ipfs/QmeF1xZ7x2EDn4duY7zAdrn7aY6vdwZB9bErxjkfPTaB4Q/${image}`
    })

    const hashes = await Promise.all(
      imagesIds.map(async (link) => {
        const response = await axios.get(link, {
          responseType: "arraybuffer",
        })
        const buffer = Buffer.from(response.data)
        return crypto.createHash("md5").update(buffer).digest("hex")
      })
    )

    return hashes
  } catch (error) {
    console.log(error)
    return []
  }
}
