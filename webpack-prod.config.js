const path = require("path");
const bundlePath = path.resolve(__dirname, "dist/");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: ["babel-polyfill", "./src/index.js", "./src/scss/index.scss"],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {
					presets: ["env"],
					plugins: ["transform-class-properties"]
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|pdf)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "file-loader",
				options: {
					name: "/[name].[ext]"
				}
			}
		]
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		publicPath: bundlePath,
		filename: "bundle.js"
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	]
};