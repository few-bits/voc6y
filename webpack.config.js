const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/background.js",
    "content-script": "./src/content-script.js",
  },
  resolve: {
    alias: {
      ExtensionServices: path.resolve(__dirname, "src/extension-services/"),
    },
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/extension-assets", to: "." },
        { from: "src/content-script.css", to: "." },
      ],
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
