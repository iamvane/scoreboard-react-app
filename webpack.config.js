module.exports = {
  devtool: 'inline-sourcemap',
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      }
    ]
  }
};
