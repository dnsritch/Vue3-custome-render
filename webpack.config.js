const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map',
    devServer: {
        port: 8090,
        inline: true,
        contentBase: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/',
                            publicPath: ''
                        }
                    }
                ]
            }
        ]
    }
}

