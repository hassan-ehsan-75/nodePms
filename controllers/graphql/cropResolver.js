const Crop =require('../../models/crop');

exports.getAll=async (parentValue,{})=>{
  return await Crop.find();
};

exports.create=async (parentValue,args)=>{
      let crop=new Crop(args);
      await crop.save();
      return {...crop.toCropType()};
};

exports.update=async (parentValue,args)=>{
    let crop =Crop.findOne({_id:args._id});
    if (!crop){
        const error=new Error('غير موجود');
        error.code=404;
        throw error;
    }
    crop=new Crop({name:name,description:description,crop_date:args.crop_date});
    await crop.save();
    return {message:"تم الحفظ بنجاح",status:1};
};

exports.destroy=async (parentValue,{_id})=>{
  let crop =Crop.findOne({_id:_id});
  if (!crop){
      const error=new Error('غير موجود');
      error.code=404;
      throw error;
  }
  await crop.deleteOne();
  return {message:"تم الحذف بنجاح",status:1};
};
