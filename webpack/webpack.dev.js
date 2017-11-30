const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  /*devServer: {
      publicPath: '/dist/',
      hot: true
      //这里还可以加入其它你需要的参数
  },*/
	entry: ["./src/app.js"],
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: "js/[name].bundle.js"
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "lalalaweb",
			template: "./index.html",
			filename: "index.html",
			inject:true
			/*,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			},*/
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["env"]
				},
				include: [path.resolve(__dirname,"src")]
			},
			/*{
				test: /\.html$/,
				loader: "html-loader",
			},*/
			{
				test: /\.tpl$/,
				loader: "ejs-loader",
			},
			{
				test: /\.(css|less)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "postcss-loader", 
						options: {
					    plugins: (loader) => [
					    	require("postcss-import")(),
					      require("autoprefixer")({broswers: ["last 5 versions"]})
					    ]
					  }
					},
					"less-loader"
				]
			},
			{
				test: /\.(png|jpg|gif|svf)$/i,
				use: [
					{
						loader: "url-loader",
						options:{
							limit: 5*1024,
							name: "assets/[hash].[ext]"
						}
					},
					"image-webpack-loader"
				]
			}
		]
	}
}
