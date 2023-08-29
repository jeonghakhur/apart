/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://sens.apigw.ntruss.com/:path*",
      },
    ];
  },
}

module.exports = nextConfig
