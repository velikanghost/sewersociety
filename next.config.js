/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ipfs.io",
      "bafybeifrjlra6j65ehypogugqcdtfwa2axunyatcdxj6emomfrsjw3brdu.ipfs.nftstorage.link",
    ],
  },
}

module.exports = nextConfig
