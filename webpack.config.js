const htmlwebpackplugin = require("html-webpack-plugin");

let htmlPageNames = [
  "login-page",
  "onboarding1",
  "onboarding2",
  "onboarding3",
  "settings",
];

module.exports = {
  plugins: [
    new htmlwebpackplugin({
      template: "./src/html/index.html",
      chunks: ["main"],
    }),

    htmlPageNames.map(
      (page) =>
        new htmlwebpackplugin({
          template: `.src/html/${page}.html`,
          filename: `${page}.html`,
        })
    ),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
};
