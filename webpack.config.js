const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const tailwindcss = require("tailwindcss")
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const env = require('dotenv-webpack')

const config = {
  entry: "./src/index.js",
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new webpack.HotModuleReplacementPlugin(),

    new env(),

    new MiniCssExtractPlugin(),

    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
        ]
      }
    })
  ],

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
  },
  
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: "style-loader",
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer,
                  tailwindcss('./tailwind.config.js')
                ]
              }
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
              publicPath: "/assets/images/"
            }
          }
        ],
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

module.exports = config;
