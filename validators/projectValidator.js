const { check } = require('express-validator');

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
        console.log(req.body);
        callback(null,true);
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