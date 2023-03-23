const Plant=require('../../models/plant');
const Category =require('../../models/category');

module.exports.getAll=async (parentValue,{})=>{
    return await Plant.find();
};


module.exports.create=async (parentValue,{name,description,price,category_id})=>{
    let plant=await Plant.findOne({name:name});


    if(plant){
        const error= new Error(` ${ name } موجود مسبقا.`);
        error.code=409;
        throw error;
    }
    const category=await Category.findOne({_id:category_id});
    if (!category){
        const error=new Error('الفئة غير موجوده');
        error.code=404;
        throw error;
    }
    plant=new Plant({name:name,description:description,price:price,category:category});
    await plant.save();
    console.log(plant);
    return plant.toPlantType();
};

module.exports.update=async (parentValue,{_id,name,description,price,category_id})=>{
    let plant=await Plant.findOne({_id:_id});

    if(!plant){
        const error= new Error(`غير موجود`);
        error.code=404;
        throw error;
    }
    const category=await Category.findOne({_id:category_id});
    if (!category){
        const error=new Error('الفئة غير موجوده');
        error.code=404;
        throw error;
    }
    await plant.updateOne({name:name,description:description,price:price,category:category});
    console.log(plant);
    return plant.toPlantType();
};


module.exports.destroy=async (parentValue,{_id})=>{
    let plant=await Plant.findOne({_id:_id});

    if(!plant){
        const error= new Error(` غير موجود`);
        error.code=404;
        throw error;
    }
    await plant.deleteOne();

    return {message:"تم الحذف",status:1};
};

