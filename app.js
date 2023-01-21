const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
// const nodeMailer = require('nodemailer');

// const transporter=nodeMailer.createTransport()
const store=new MongoDBStore({
   uri:'mongodb+srv://hasan-ehsan:1v5z7c8l10r@cluster0.u4ci5hf.mongodb.net/test?retryWrites=true&w=majority',
   collection :'sessions'
});
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const User = require('./models/user');

const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'cdn')));
app.use(session({secret:'wergnmfcgvhbjnkmasdfasdf',resave:false,saveUninitialized:false,store:store}));

app.use(function(req, res, next) {
    User.findById('63c6b50aeb3c1bba7cf7fca9')
        .then(user=>{
            req.body.userId=user;
            next();
        })
        .catch(err=> {
                console.log(err);
            }
        );
});

app.use('/api', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(locals);
});


module.exports = app;
