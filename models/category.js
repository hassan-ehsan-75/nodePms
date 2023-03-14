const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const categorySchema=new Schema({
    name:{
        type:String,
        required:true,
    }
});

categorySchema.methods.toCategoryType=function(){
    let obj=this.toObject();
    obj._id=obj._id.toString();
    delete obj.__v;
    return obj;
};

module.exports=mongoose.model('Category',categorySchema);