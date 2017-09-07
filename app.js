const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const compression = require('compression');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
const partials = require('express-partials');

app.use(partials());
app.use(logger('dev'));

// uncomment after placing your favicon in /public
app.use(favicon(`${__dirname}/public/assets/favicon.ico`));
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/index');

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            layout: '',
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        layout: '',
        message: err.message,
        error: {}
    });
});

module.exports = app;
