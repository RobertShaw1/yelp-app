'use strict'

const path = require('path');
const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('../../secrets');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('../../webpack.config.js')(process.env);
  const compiler = webpack(config);
  /*
  Tell express to use the webpack-dev-middleware and use the webpack.config.js file as a base.
  */
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const PORT = process.env.PORT || 8080;

app.use('/api', require('./api'));
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, (err) => {
  if(err) throw err;
  console.log(`Server running on PORT ${PORT}!\n`);
});
