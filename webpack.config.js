const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: ["./ts/setupDataVariables.ts", "./ts/setupMovieCards.ts"],
  },
  output: {
    path: path.resolve(__dirname, './js'),
    filename: "bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
}