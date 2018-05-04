const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = merge({
    mode: "development",
    devtool: "eval-source-map",
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
});
