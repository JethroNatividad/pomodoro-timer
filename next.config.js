/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    nextScriptWorkers: true,
    outputStandalone: true
  },
}

module.exports = nextConfig
