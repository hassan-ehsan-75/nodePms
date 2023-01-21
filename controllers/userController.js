const  User=require('../models/user');
const  jsonHelper=require('../helpers/jsonHelper');


    exports.index=(req,res,next)=>{
       User.find()
           .then(users=>{
               res.status(200).json(jsonHelper.returnSuccess("got successfully",users))
           })
           .catch(err=> {
                   res.status(500).json(jsonHelper.returnError(err.message));
               }
           );
    };

    exports.show=(req,res,next)=>{
       User.findById(req.params.userId)
           .then(users=>{
               res.status(200).json(jsonHelper.returnSuccess("got successfully",users))
           })
           .catch(err=> {
                   res.status(500).json(jsonHelper.returnError(err.message));
               }
           );
    };

    exports.store=(req,res,next)=>{
        const user=new User(req.body);
        user.save().then(result=>{
            console.log(result);
            res.status(200).json(jsonHelper.returnSuccess("saved successfully",result));
        }).catch(err=>{
            res.status(500).json(jsonHelper.returnError(err.message));
        });

    };
    exports.update=(req,res,next)=>{
        User.findById(req.params.userId)
            .then(user=>{
                user.name=req.body.title;
                user.email=req.body.description;
                user.avatar=req.body.avatar;
                user.password=req.body.password;
                user.is_admin=req.body.is_admin;
                return user.save();
            })
            .then(result=>{
                console.log(result);
                res.status(200).json(jsonHelper.returnSuccess("saved successfully",result));
            })
            .catch(err=> {
                    res.status(500).json(jsonHelper.returnError(err.message));
                }
            );
    };

    exports.delete=(req,res,next)=>{
        User.findByIdAndRemove(req.params.userId)
            .then(users=>{
                res.status(200).json(jsonHelper.returnSuccess("deleted successfully"))
            })
            .catch(err=> {
                    res.status(500).json(jsonHelper.returnError(err.message));
                }
            );
    };