const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "./client/index.tsx"), // main js
  output: {
    path: path.resolve(__dirname, "./build"), // output folder
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./build"),
      publicPath: "/",
    },
    proxy: {
      "/api/": "http://localhost:3000",
    },
    host: "localhost",
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader'],
        type: 'asset/resource',
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html", // base html
    }),
  ],
};
