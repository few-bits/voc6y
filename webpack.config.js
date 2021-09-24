const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/background.js",
    "content-script": "./src/content-script.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/extension-assets", to: "." }],
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
