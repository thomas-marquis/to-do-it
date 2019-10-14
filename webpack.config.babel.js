import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import glob from 'glob'

const config = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devServer: {
    overlay: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    },
    port: 3000
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ejs$/,
        use: ['ejs-loader']
      }
    ]
  },
  plugins: []
}

const files = glob.sync(process.cwd() + '/views/*.ejs')
files.forEach(file => {
  config.plugins.push(new HtmlWebpackPlugin({
    template: file,
    filename: path.basename(file).replace('.ejs', '.html')
  }))
})

export default config
