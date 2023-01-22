const { check } = require('express-validator');
const multer = require('multer');
const User = require('../models/user');

const fileStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'cdn/avatars');
    },
    filename:(req,file,callback)=>{
        callback(null,Math.floor(+new Date() / 1000)+'-'+file.originalname.toString().replace(' ',''));
    }
});
const fileFilter =(req,file,callback)=>{
    if(['image/png','image/jpg','image/jpeg'].includes(file.mimetype)){
        callback(null,true);
    }else {
        console.log('false');
        callback(null,false);
    }
};
exports.register=[
    multer({storage:fileStorage,fileFilter:fileFilter}).single('avatar'),
    check('email').trim().isEmail().withMessage('Please enter a valid email!.').custom((value,{req})=>{
        return User.findOne({email:req.body.email})
            .then(user=>{
                if(user){
                    return Promise.reject('Email already in user.')
                }
            }).catch(err=>{
              console.log(err);
            })
    }),
    check('password').trim().isLength({min:6}).withMessage('must be at least 6 chars long'),
    check('name').trim().isLength({min:2}).withMessage('must be at least 2 chars long')
];
exports.login=[
    check('email').trim().not().isEmpty().withMessage('email is required.'),
    check('password').trim().isLength({min:6}).withMessage('must be at least 6 chars long')
];