exports.formatError=function (error) {
    const errors=[];
    error.inner.forEach(e=>{
        error.push({path:e.path,message:e.message});
    });
    return errors;
};