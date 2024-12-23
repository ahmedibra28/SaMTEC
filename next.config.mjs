/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'rrslide.com' },
      { protocol: 'https', hostname: 'www.google.com' },
      { protocol: 'https', hostname: 'cloud.appwrite.io' },
      { protocol: 'https', hostname: 'www.banq.qc.ca' },
      {
        protocol: 'https',
        hostname: 'samtec-dims.s3.us-west-002.backblazeb2.com',
      },
      { protocol: 'https', hostname: 'f002.backblazeb2.com' },
      {
        protocol: 'https',
        hostname: 'pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev',
      },
    ],
  },
}

export default nextConfig
