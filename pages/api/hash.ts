import fs from "fs-extra"
import crypto from "crypto"

export async function getMd5Hashes(): Promise<string[]> {
  const dirPath = "./public/img"
  const files = await fs.readdir(dirPath)

  const promises = files.map(async (file) => {
    const filePath = `${dirPath}/${file}`
    const fileExtension = file.split(".").pop()
    if (fileExtension === "JPG" || fileExtension === "png") {
      const data = await fs.promises.readFile(filePath)
      const hash = crypto.createHash("md5").update(data).digest("hex")
      return hash
    }
  })

  const md5Hashes = await Promise.all(promises)
  console.log(md5Hashes)
  return md5Hashes.filter((hash) => hash !== undefined) as string[]
}
