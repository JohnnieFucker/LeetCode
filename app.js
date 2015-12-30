var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var compression = require('compression');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'solutions'));
app.set('view engine', 'ejs');
var partials = require('express-partials');
app.use(partials());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/assets/favicon.ico'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            layout:'',
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        layout:'',
        message: err.message,
        error: {}
    });
});

module.exports = app;
