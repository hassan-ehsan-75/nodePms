const Category=require('../../models/category');

exports.getAll=async (parentValue,{})=>{
    return await  Category.find();
};

exports.create=async (parentValue,{name})=>{
    let category= await Category.findOne({name:name});
    if (category){
        const error=new Error('موجود مسبقا');
        error.code=409;
        throw error;
    }
    category=new Category({name:name});
    await category.save();
    return {...category.toCategoryType()};
};
exports.update=async (parentValue,{_id,name})=>{
    let category= await  Category.find({_id:_id});
    if (!category){
        const error=new Error('غير موجود');
        error.code=404;
        throw error;
    }
    await category.updateOne({name:name});
    return {message:"تم التعديل بنجاح",status:1};
};
exports.destroy=async (parentValue,{_id})=>{
    let category=await Category.find({_id:_id});
    if (!category){
        const error=new Error('غير موجود');
        error.code=404;
        throw error;
    }
    await category.deleteOne();
    return {message:"تم الحذف بنجاح",status:1};
};