const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ROOT_PATH = path.resolve(__dirname, '../../');
const DIST_PATH = path.resolve(ROOT_PATH, 'webroot/wp-dist/');
const IS_PROD = (process.env.NODE_ENV === 'production');

const config = {
  entry: {
    home: [
      path.resolve(ROOT_PATH, 'react-scr/scripts/entries/app.jsx'),
      path.resolve(ROOT_PATH, 'react-scr/styles/main.scss')
    ]
  },
  output: {
    path: DIST_PATH,
    filename: IS_PROD ? '[name][chunkhash:8].js' : '[name].js',
    publicPath: (IS_PROD ? '/wp-dist/' : '/'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "vendors",
          enforce: true
        }
      }
    }
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer'
                  ],
                  [
                    'cssnano'
                  ]
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {  //If emitting file, the file path is
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: IS_PROD ? '[name][chunkhash:8].css' : '[name].css', chunkFilename: '[chunkhash:8].css',})
  ],
  resolve: {
    modules: [
      path.resolve("./react-src"),
      path.resolve("./node_modules")
    ],
    extensions: [".js", ".jsx"]
  }
};

//module.exports = config
module.exports = {
  config,
  paths: {
    ROOT_PATH,
    DIST_PATH
  }
};