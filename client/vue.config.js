module.exports = {
  publicPath: process.env.PUBLIC_URL || "/",
  filenameHashing: false,
  configureWebpack: {
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[id].js"
    }
  }
};
