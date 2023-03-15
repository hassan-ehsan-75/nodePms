const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const postSchema=new Schema({
   title:{
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
   } ,
   category:{
       type:Schema.Types.ObjectId,
       ref:'Category'
   }
});

postSchema.methods.toPostType=function () {
    let obj=this.toObject();
    delete obj.__v;
    return obj
};
module.exports=mongoose.model('Post',postSchema);

