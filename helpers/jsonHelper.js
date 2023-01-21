exports.returnSuccess=(message,data)=>{
    return {
        'status':1,
        'message':message,
        'data':data
    }
};
exports.returnError=(message)=>{
    return {
        'status':-1,
        'message':message,
    }
};