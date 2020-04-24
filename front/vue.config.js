const path = require("path")
const webpack = require("webpack")
/*const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")*/
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ManifestPlugin = require("webpack-manifest-plugin")
function resolveSrc(_path) {
  return path.join(__dirname, _path)
}
// vue.config.js
module.exports = {
  publicPath: "/",
  lintOnSave: process.env.NODE_ENV !== "production",
  configureWebpack: {
    performance: { hints: false },
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc("src"),
        "@lib": resolveSrc("src/components/lib"),
        assets: resolveSrc("src/assets"),
        "@assets": resolveSrc("src/assets"),
        icons: resolveSrc("node_modules/vue-material-design-icons"),
      },
      extensions: [".vue"],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: process.env.ENV
        }
      }),
      /*new OptimizeCssAssetsPlugin(),*/
      new HtmlWebpackPlugin({
        filename: "public/index.html",
        template: "public/index.html",
        inject: true,
        chunksSortMode: "dependency"
      }),
      new ManifestPlugin()
    ],
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              implementation: require('sass'),
              fiber: require('fibers'),
              indentedSyntax: true // optional
            },
            // Requires sass-loader@^8.0.0
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
                indentedSyntax: true // optional
              },
            },
          },
        ],
      },
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `npm.${packageName.replace("@", "")}`
            },
          },
        }
      }
    },
    output: {
      filename: "[name].[hash].js"
    },
    devtool: "source-map",
  },
  pluginOptions: {
    i18n: {
      locale: "pt",
      fallbackLocale: "pt",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
    // Enable scss variables inside .vue files
    loaderOptions: {
      sass: {},
    },
  },
  devServer: {
    host: "localhost",
    port: 8080,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
