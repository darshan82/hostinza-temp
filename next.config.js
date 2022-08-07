/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const nextConfig = {
  reactStrictMode: false,
  // reactStrictMode: true,
 ...nextTranslate(),
}

module.exports = nextConfig
