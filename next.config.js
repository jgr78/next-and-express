module.exports = {
    env: {
        URL: 'http://localhost:9000/conditions',
    },
    webpack: (config, { dev }) => {
        if (dev) {
          config.module.rules.push({
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: ['/node_modules/', '/.next/', '/out/'],
            enforce: 'pre',
            options: {
              emitWarning: true,
              fix: true,
            },
          })
        }
        return config
      }
}