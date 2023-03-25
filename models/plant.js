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
    stages:{
       items:[
           {
               plantStageId:{type:Schema.Types.ObjectId,ref:'PlantStage'},
           }
       ]
    }
});

plantSchema.methods.toPlantType = function() {
    let obj = this.toObject();
    obj._id=obj._id.toString();
    delete obj.__v;
    return obj;
};

plantSchema.methods.addPlantStage = async function (stage) {
    // const plantStageIndex = this.stages.items.findIndex(cb => {
    //     return cb.plantStageId.toString() === stage._id.toString();
    // });
    const updatedPlantStages = [...this.stages.items];
    updatedPlantStages.push({
        plantStageId: stage._id
    });
    this.stages = {items: updatedPlantStages};
    await this.save();


};
module.exports=mongoose.model('Plant',plantSchema);