const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // 模式 开发模式
  mode: "development",
  // 入口文件 main.js
  entry: {
    main: "./src/main.js",
  },
  // 输出
  output: {
    // 输出到 dist文件夹
    path: path.resolve(__dirname, "./dist"),
    // js文件下
    filename: "js/chunk-[contenthash].js",
    // 每次打包前自动清除旧的dist
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/chunk-[contenthash].css",
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css|s[cs]ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: "asset",
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          // 打包到 dist/image 文件下
          filename: "images/[contenthash][ext][query]",
        },
      },
      {
        // 匹配js后缀文件
        test: /\.js$/,
        // 排除node_modules中的js
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      assets: "~/assets",
      tools: "~/tools",
    },
    // 引入文件省略后缀
    extensions: [".js", ".ts", ".less", ".vue"],
  },
  devServer: {
    // 自定义端口号
    // port:7000,
    // 自动打开浏览器
    open: true
  },

};
