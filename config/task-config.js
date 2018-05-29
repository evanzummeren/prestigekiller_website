module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    devtool: 'hidden-source-map',
    uglifyJsPlugin: {
      extractComments: true
    },
    plugins: (webpack) => { return [ new webpack.IgnorePlugin(/jsdom$/) ] },
    loaders: [] // Adds to `webpackConfig.module.rules`
  }
}
