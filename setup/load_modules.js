const express = require('express');
//Lib
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors =require('cors');
const multer = require('multer');
//others
const { NODE_ENV } =require( '../util/config/env');

//SETUP SOME PACKAGES AND STATIC FOLDERS
const setup=function (app) {

//middleware

    // HTTP logger
    if(NODE_ENV === 'production') {
        app.use(logger('tiny'))
    }else{
        app.use(logger('combined'));
    }

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static( 'public'));
    app.use(express.static(path.join(__dirname, 'cdn')));
    app.use("/cdn",express.static('cdn'));
    const fileStorage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'cdn/uploads');
        },
        filename:(req,file,cb)=>{
            cb(null,Math.floor(Date.now() / 1000)+'.'+file.mimetype.substr(file.mimetype.lastIndexOf('/')+1));
        },

    });
    const fileFilter = (req, file, cb) => {
        if(['image/png','image/jpg','image/jpeg','video/mp4'].includes(file.mimetype)){
            cb(null,true);
        }else {
            cb(null, false);
        }
    };
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
    app.use(  multer({ storage: fileStorage, fileFilter: fileFilter }).single('attachment'));



};


module.exports=setup;