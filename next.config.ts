import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // tsx, jsx에서만 svg import 허용
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
