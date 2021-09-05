const path = require('path')

module.exports = {
  route: app => {
    app.get(['/', '/about', '/contact'], (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '../../client/dist/index.html')
      )
    }).post('/addmail', (req, res) => {
      console.log('added mail')
    })
    // .get(/^(?=.*(\.js|\.css)).*$/, (req, res) => {
    //   res.sendFile(
    //     path.resolve(__dirname, '../../client/dist', req.path)
    //   )
    // })
  }
}