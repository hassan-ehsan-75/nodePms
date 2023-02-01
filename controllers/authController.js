const  User=require('../models/user');
const  jsonHelper=require('../util/helpers/jsonHelper');
const bcrypt=require('bcryptjs');
const {  validationResult } = require('express-validator');
const jwt =require('jsonwebtoken');

    exports.register=(req,res,next)=>{
        const errors=validationResult(req);
        if (!errors.isEmpty()){
             res.status(422).json(jsonHelper.returnError('invalid inputs',errors.array()));
        }
        if(!req.file){
             res.status(422).json(jsonHelper.returnError('image is required',[]));
        }
        req.body.avatar=req.file.path;
        bcrypt.hash(req.body.password,12)
            .then(hashed=>{
                req.body.password=hashed;
                const user=new User(req.body);
                return user.save();
            })
            .then(result=>{
                console.log(result);
                res.status(200).json(jsonHelper.returnSuccess("saved successfully",result));
            })
            .catch(err=>{
                res.status(500).json(jsonHelper.returnError(err.message));
            });

    };
    exports.login=(req,res,next)=>{
        const errors=validationResult(req);
        let user;
        if (!errors.isEmpty()){
             res.status(422).json(jsonHelper.returnError('invalid inputs',errors.array()));
        }
        User.findOne({email:req.body.email})
            .then(resUser=>{
                if(!resUser){
                    res.status(401).json(jsonHelper.returnError('email not found'));
                }
                user=resUser;
                return bcrypt.compare(req.body.password,resUser.password)
            }).then(equal=>{
                if (!equal){
                    equal.status(401).json(jsonHelper.returnError('incorrect password'));
                }
                const token=jwt.sign({email:user.email,userId:user._id.toString()},
                    'secertServerSide',{expiresIn:'1h'});
                res.status(200).json(jsonHelper.returnSuccess('logged in successfully',{user:user.toJSON(),token:token}));
            })
            .catch(err=>{
                res.status(500).json(jsonHelper.returnError(err.message));
            });
    }
