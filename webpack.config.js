const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require ('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@sass': path.resolve(__dirname, 'src/scss/'),
        }
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
                    MiniCssExtractPlugin.loader,
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
        new CleanWebpackPlugin()

    ],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }

}