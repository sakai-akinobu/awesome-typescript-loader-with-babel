const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.js",
  },
};
