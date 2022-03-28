/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  }
  
}

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  ...nextConfig
})
