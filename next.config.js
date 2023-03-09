/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domain:[ "supermomos-app-resources-us.s3.amazonaws.com"],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ]
  },
  



}

module.exports = nextConfig
