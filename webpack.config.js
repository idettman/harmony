var path = require('path');
module.exports = {
    entry: "./src/willipass.ts",
    output: {
        filename: "./willipass.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.ts?$/, loader: "ts-loader" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src")]
    }
};