const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const insecticideSchema=new Schema({
   name:{
       type:String,
       required:true
   } ,
   description:{
       type:String,
       required:true
   } ,
    attachment:{
        type:String,
        required:false
    }
});

insecticideSchema.methods.toInsecticideType = function() {
    let obj = this.toObject();
    obj._id=obj._id.toString();
    delete obj.__v;
    return obj;
};

module.exports=mongoose.model('Insecticide',insecticideSchema);