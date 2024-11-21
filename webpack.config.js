const CopyPlugin = require("copy-webpack-plugin");
const htmlwebpackplugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: "./src/index.js",

    main: "./src/js/home.js",
    app: "./src/js/app.js",
  },

  plugins: [
    new htmlwebpackplugin({
      template: "./src/html/index.html",
      chunks: ["main", "index"],
    }),

    new CopyPlugin({
      patterns: [{ from: "projekt-ui/screens", to: "imgs/[name][ext]" }],
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    new htmlwebpackplugin({
      template: `./src/html/home.html`,
      filename: `home.html`,
      chunks: ["index"],
    }),
    new htmlwebpackplugin({
      template: `./src/html/login-page.html`,
      filename: `login-page.html`,
      chunks: ["index"],
    }),
    new htmlwebpackplugin({
      template: `./src/html/onboarding.html`,
      filename: `onboarding.html`,
      chunks: ["app", "index"],
    }),
    new htmlwebpackplugin({
      template: `./src/html/popular.html`,
      filename: `popular.html`,
      chunks: ["index"],
    }),

    new htmlwebpackplugin({
      template: `./src/html/archive.html`,
      filename: `archive.html`,
      chunks: ["index"],
    }),

    new htmlwebpackplugin({
      template: `./src/html/settings.html`,
      filename: `settings.html`,
      chunks: ["index"],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "imgs/[name][ext]",
        },
      },
    ],
  },
};
