const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const cropSchema=new Schema({
   name:{
       type:String,
       required:true
   } ,
   description:{
       type:String,
       required:true
   } ,
   crop_date:{
       type:Date,
       required:false
   }
});

cropSchema.methods.toCropType=function () {
    let obj=this.toObject();
    obj.crop_date=new Date(obj.crop_date).toLocaleDateString("en-US")
    delete obj.__v;
    return obj
};
module.exports=mongoose.model('Crop',cropSchema);

