const  Project=require('../models/project');
const  jsonHelper=require('../helpers/jsonHelper');
const {  validationResult } = require('express-validator');

    exports.index=(req,res,next)=>{
       Project.find()
           .populate('userId')
           .then(projects=>{
               res.status(200).json(jsonHelper.returnSuccess("got successfully",projects))
           })
           .catch(err=> {
                   res.status(500).json(jsonHelper.returnError(err.message));
               }
           );
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
            return res.status(400).json({ errors: errors.array() });
        }
        if(!req.file){
            res.status(422).json(jsonHelper.returnError("the cover is required"));

        }
        req.body.cover=req.file.path;
        const project=new Project(req.body);
        console.log(project);
        project.save().then(result=>{
            console.log(result);
            res.status(200).json(jsonHelper.returnSuccess("saved successfully",result));
        }).catch(err=>{
            res.status(500).json(jsonHelper.returnError(err.message));
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