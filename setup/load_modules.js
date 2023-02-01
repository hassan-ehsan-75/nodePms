const express = require('express');
//Lib
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors =require('cors');

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

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'cdn')));


};


module.exports=setup;