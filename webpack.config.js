module.exports = {
  devtool: 'sourcemap',
  output:{
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      { test: /\.js$/, eclude:[/node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' },
    ]
  }
}
