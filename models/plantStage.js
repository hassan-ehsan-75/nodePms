const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const plantStageSchema=new Schema({
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
    },
    order:{
        type:Number,
        required:false
    },
    plant:{
        type:Schema.Types.ObjectId,
        ref:'Plant'
    },
});
plantStageSchema.methods.toPlantStageType = function() {
    let obj = this.toObject();
    obj._id=obj._id.toString();
    delete obj.__v;
    return obj;
};
module.exports=mongoose.model('PlantStage',plantStageSchema);