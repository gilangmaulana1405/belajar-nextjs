/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // untuk konfigurasi dengan menggunakan folder app
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  }
}

module.exports = nextConfig