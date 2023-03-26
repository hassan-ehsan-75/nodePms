const Insecticide =require('../../models/insecticide');

exports.getAll=async (parentValue,{})=>{
  return await Insecticide.find();
};

exports.create=async (parentValue,{name, description,attachment})=>{
    
      let insecticide=new Insecticide({name:name,description:description,attachment:attachment});
      await insecticide.save();
      return {...insecticide.toInsecticideType()};
};

exports.update=async (parentValue,{_id,name, description,attachment})=>{

    let insecticide =Insecticide.findOne({_id:_id});
    if (!insecticide){
        const error=new Error('غير موجود');
        error.code=404;
        throw error;
    }
    insecticide=new Insecticide({name:name,description:description,attachment:attachment});
    await insecticide.save();
    return {message:"تم الحفظ بنجاح",status:1};
};

exports.destroy=async (parentValue,{_id})=>{
  let insecticide =Insecticide.findOne({_id:_id});
  if (!insecticide){
      const error=new Error('غير موجود');
      error.code=404;
      throw error;
  }
  await insecticide.deleteOne();
  return {message:"تم الحذف بنجاح",status:1};
};
