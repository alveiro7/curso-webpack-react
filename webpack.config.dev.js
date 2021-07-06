const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require ('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test:/\.s?[ac]ss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                //asset module
                test: /\.png/,
                type: 'asset/resource'
            },
            // url loader fonts
            {
                test:/\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                            // o le pasamos un bool [true o false]
                            // habilita o deshabilita la transformacion en base64
                            limit: 10000,
                            // Especifica el tipo MIME con el que se alineará el archivo.
                            // Los MIME Types (Multipurpose Internet Mail Extensions)
                            // son la manera standard de mandar contenido a través de la red.
                            mimetype: "application/font-woff",
                            // nombre inicial del archivo + ext
                            // puedes agragarle  [name]hola.[ext]
                            // el output seria asi ubuntu-regularhola.woff
                            name: "[name].[contenthash].[ext]",
                            // directorio de salida
                            outputPath: "./assets/fonts/",
                            // directorio publico
                            publicPath: "../assets/fonts/",
                            // avisar explicitamente si es un modulo
                            esModule: false
                        }
                    }
                }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                {   // la carpeta que voy a copiar
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images" // la ruta donde van los archivos
                }
            ]
        }),
        new Dotenv(),

    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006,
        open: true
    }
}