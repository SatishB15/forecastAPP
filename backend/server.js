const createError = require('http-errors');
const express = require('express');
const http = require('http');
const forecastRoutes = require('./routes/forecast');
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());
app.use('/', forecastRoutes);

app.set('port', 3000);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const server = http.createServer(app);

server.listen(3000, '127.0.0.1');
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    console.log(error);
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log(`Listening on ${addr.address}:${addr.port}`);
}