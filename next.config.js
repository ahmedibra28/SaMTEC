module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      'samtec-dims.s3.us-west-002.backblazeb2.com',
      'res.cloudinary.com',
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
