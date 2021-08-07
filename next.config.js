module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack(config, options) {
    const { isServer } = options
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config
  },
}

// function style:
// module.exports = (phase, { defaultConfig }) => {
//   return {}
// }

// note: trailing slash helps facilitate static deployment especially on hosts such as s3
// @see https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
