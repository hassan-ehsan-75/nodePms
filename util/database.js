const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hasan-ehsan:1v5z7c8l10r@cluster0.u4ci5hf.mongodb.net/test?retryWrites=true&w=majority";
let _db;
const mongoConnect = (callback)=>{

    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
        .then(client=>{
            console.log('conected');
            _db=client.db('test');
            callback();
        }).catch(err=>{
        console.log("error",err);
        throw  err;
    });
};

const getDB=()=>{
    if (_db){
        return _db;
    }
    throw 'error db';
};

exports.mongoConnect= mongoConnect;
exports.getDB= getDB;