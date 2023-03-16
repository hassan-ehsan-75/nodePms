const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const plantSchema=new Schema({
   name:{
       type:String,
       required:true
   } ,
   description:{
       type:String,
       required:true
   } ,
    image:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:false
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
});
plantSchema.methods.toPlantType = function() {
    let obj = this.toObject();
    obj._id=obj._id.toString();
    delete obj.__v;
    return obj;
};
module.exports=mongoose.model('Plant',plantSchema);