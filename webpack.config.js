const path = require('path');

module.exports = {
    entry: {
        game: './src/Main.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'Game.js'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
      watch: true
};