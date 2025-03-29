/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
    // prependData: `@import "styles/variables.scss"; @import "styles/mixins.scss";`,
  },
  images: {
    domains: ['localhost', 'your-production-domain.com'],
  },
}

module.exports = nextConfig
