
//routes
const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const authRouter = require('../routes/auth');
const jsonHelper = require('../util/helpers/jsonHelper');
const path=require('path');
const fs=require('fs');
//others

//SETUP API ROUTES MAYBE WILL NOT BE USE WHILE THERE IS A GRAPHQL
const setupRoute=function (app) {
    app.put('/api/upload-attachment',(req,res,next)=>{

       if(!req.file){
         return   res.status(409).json(jsonHelper.returnError('file not provided!',[]));
       }
       if(req.body.oldPath){
           let oPath=path.join(__dirname,'..',req.body.oldPath);
           fs.unlink(oPath,err => {return res.status(500).json(jsonHelper.returnError(err.message,[]))})
       }
       return res.status(201).json(jsonHelper.returnSuccess('saved successfully',{path:req.file.path}));
    });
    app.use('/api', indexRouter);
    app.use('/api', authRouter);
    app.use('/users', usersRouter);

};
module.exports=setupRoute;