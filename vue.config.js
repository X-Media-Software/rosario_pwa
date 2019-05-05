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
  }
};
