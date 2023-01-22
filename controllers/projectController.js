const  Project=require('../models/project');
const  jsonHelper=require('../helpers/jsonHelper');
const {  validationResult } = require('express-validator');

    exports.index=(req,res,next)=>{
        const page =req.query.page ||1;
        const perPage=20;
        let total;
        Project.countDocuments()
            .then(count=>{
                total=count;
                return Project.find()
                    .populate('userId')
                    .skip((page-1)*perPage)
                    .limit(perPage)
            })
            .then(projects=>{
                res.status(200).json(jsonHelper.returnSuccess("got successfully",{projects:projects,total:total}))
            })
            .catch(err=>{
                res.status(err.status||500).json(jsonHelper.returnError(err.message));
            });
    };

    exports.show=(req,res,next)=>{
       Project.findById(req.params.projectId)
           .populate('userId')
           .then(projects=>{
               res.status(200).json(jsonHelper.returnSuccess("got successfully",projects))
           })
           .catch(err=> {
                   res.status(500).json(jsonHelper.returnError(err.message));
               }
           );
    };

    exports.store=(req,res,next)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json(jsonHelper.returnError('invalid inputs',errors.array()));
        }
        if(!req.file){
            res.status(422).json(jsonHelper.returnError("the cover is required"));

        }
        console.log(req.body);
        req.body.cover=req.file.path;

        const project=new Project(req.body);

        project.save().then(result=>{
            console.log(result);
            res.status(200).json(jsonHelper.returnSuccess("saved successfully",result));
        }).catch(err=>{
            res.status(err.status||500).json(jsonHelper.returnError(err.message));
        });

    };
    exports.update=(req,res,next)=>{
        Project.findById(req.params.projectId)
            .then(project=>{
                project.title=req.body.title;
                project.description=req.body.description;
                project.cover=req.body.cover;
                return project.save();
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
        Project.findByIdAndRemove(req.params.projectId)
            .then(projects=>{
                res.status(200).json(jsonHelper.returnSuccess("deleted successfully"))
            })
            .catch(err=> {
                    res.status(500).json(jsonHelper.returnError(err.message));
                }
            );
    };