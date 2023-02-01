const mongoose = require('mongoose');
const NODE_ENV=require( '../util/config/env');
const mongooseSetup=function () {
    return new Promise((resolve,reject)=>{
        mongoose.set('strictQuery', false);
        mongoose.connect(NODE_ENV.MONGOOSE_CONNECTION).then(res=>{
            console.log('connected');
            resolve(res);
        }).catch(err=>{
            console.log(err);
            reject(err);
        });
    });

}

module.exports=mongooseSetup;