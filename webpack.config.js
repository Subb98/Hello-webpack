var path = require("path");

module.exports = {
  entry: "./app/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "web"),
    publicPath: "/assets/"
  },
  devServer: {
    inline: true,
    host: "0.0.0.0",
    port: 3000,
    contentBase: path.join(__dirname, "web")
  }
};
