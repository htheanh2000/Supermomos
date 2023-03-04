/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ]
  },
  images: {
    domains: ['picsum.photos']
  }

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'picsum.photos',
  //       port: '',
  //       pathname: 'id/**',
  //     },
  //   ],
  // },

}

module.exports = nextConfig
