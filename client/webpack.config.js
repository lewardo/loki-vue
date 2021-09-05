module.exports = {
  module: {
    rules: {
      test: /\.s[ac]ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true
            }
          }
        }
      ]
    }
  },
}