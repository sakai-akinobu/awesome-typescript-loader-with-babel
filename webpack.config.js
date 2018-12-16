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
        options: {
          useBabel: true,
          babelOptions: {
            babelrc: false,
            presets: [
              '@babel/preset-env',
            ],
          },
          babelCore: '@babel/core',
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.js",
  },
};
