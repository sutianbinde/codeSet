"use strict"

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.dev.js')
//var WebpackDevServer = require('webpack-dev-server');
//
//var webpackDevMiddleware = require('webpack-dev-middleware');
//var webpackHotMiddleware = require('webpack-hot-middleware');

config.entry.unshift("webpack-hot-middleware/client?reload=true");
config.output.publicPath = "/";

const app = express()
const compiler = webpack(config)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(8080);
console.log("> Starting dev server...");
var uri = "http://localhost:8080/"
opn(uri)  //浏览器打开页面

console.log("> have done, Listening at " + uri + "\n")
