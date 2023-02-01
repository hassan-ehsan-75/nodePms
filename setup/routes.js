
//routes
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const authRouter = require('../routes/auth');
//others

//SETUP API ROUTES MAYBE WILL NOT BE USE WHILE THERE IS A GRAPHQL
const setupRoute=function (app) {

    app.use('/api', indexRouter);
    app.use('/api', authRouter);
    app.use('/users', usersRouter);

};
module.exports=setupRoute;