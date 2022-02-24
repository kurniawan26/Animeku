const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/template.html",
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./src/templates/template-about.html",
      filename: "about.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./src/templates/template-list.html",
      filename: "list-film.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      template: "./src/templates/template-detail.html",
      filename: "detail-film.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
  ],

  resolve: {
    fallback: { url: false },
  },
};
