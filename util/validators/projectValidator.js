const { check } = require('express-validator');

const User = require('../../models/user');
const multer = require('multer');

const fileStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'cdn');
    },
    filename:(req,file,callback)=>{
        callback(null,Math.floor(+new Date() / 1000)+'-'+file.originalname.toString().replace(' ',''));
    }
})
const fileFilter =(req,file,callback)=>{
    if(['image/png','image/jpg','image/jpeg'].includes(file.mimetype)){
        User.findById('63c6b50aeb3c1bba7cf7fca9')
            .then(user=>{
                req.body.userId=user;

                console.log("user_success:",user.name);
                callback(null,true);
            })
            .catch(err=> {
                    console.log("user_error:",err);
                }
            );

    }else {
        console.log('false');
        callback(null,false);
    }
};
exports.create=[
    multer({storage:fileStorage,fileFilter:fileFilter}).single('attachment'),
    check('title').trim().isLength({min:5}).withMessage('must be at least 5 chars long'),
    check('description').trim().isLength({min:5}).withMessage('must be at least 5 chars long')
];