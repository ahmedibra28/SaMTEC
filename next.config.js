const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
      },
    ],

    // your other plugins here
  ],
  {
    reactStrictMode: true,
    images: {
      domains: [
        'samtec-dims.s3.us-west-002.backblazeb2.com',
        'res.cloudinary.com',
      ],
    },
  }
)
