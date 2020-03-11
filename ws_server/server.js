var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();
app.set('port', require('./lib/normalizePort')(process.env.PORT || '5000'));

app.use(logger('dev'));

var index = require('./routes/index');
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = http.createServer(app);

require('./sockets/socketsIo')(server, {pingTimeout: 30000});

function Server_START() {
  server.listen(app.get('port'), '0.0.0.0', function() {
    console.log(`
  ---------------------------------
  | Server running on PORT:  ${app.get('port')} |
  ---------------------------------
  `);
  });
}

Server_START();