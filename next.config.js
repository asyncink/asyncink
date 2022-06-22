// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const config = {
  pageExtensions: ['page.tsx', 'page.ts'],

  poweredByHeader: false,

  eslint: {
    dirs: ['src']
  },

  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru'
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = config
