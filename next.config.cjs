/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/signed_bg',
        destination: 'https://zfrmz.in/7oGOIs1yHb2rUlfpiQ8K',
        permanent: false, // set true if this is a forever redirect
      },
    ]
  },
}

module.exports = nextConfig
