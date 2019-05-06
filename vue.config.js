module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      },
      disableHostCheck: true,
      clientLogLevel: "error",
      hotOnly: true
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/favicon.jpg',
      favicon16: 'img/icons/favicon.jpg'
    }
  }
};
