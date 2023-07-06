/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/',
        destination: '/lounge/page',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
