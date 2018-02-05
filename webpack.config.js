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
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[sha512:hash:base64:7].[ext]"
            }
          }
        ]
      }
    ]
  }
};
