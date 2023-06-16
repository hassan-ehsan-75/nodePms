const Post =require('../../models/post');
const Category =require('../../models/category');

exports.getAll=async (parentValue,{})=>{
  return await Post.find().populate('category');
};

exports.getPostsByCategory=async (parentValue,{category_id})=>{
    console.log(category_id);
    console.log("post by cat");
  return await Post.where({category:category_id});
};
exports.getPostsById=async (parentValue,{post_id})=>{
    console.log(post_id);
  return await Post.findOne({_id:post_id});
};

exports.create=async (parentValue,{title, description,category_id})=>{
      const category=await Category.findOne({_id:category_id});
      if (!category){
          const error=new Error('الفئة غير موجوده');
          error.code=404;
          throw error;
      }
      let post=new Post({title:title,description:description,category:category});
      await post.save();
      return {...post.toPostType()};
};

exports.update=async (parentValue,{_id,title, description,category_id})=>{
    const category=await Category.findOne({_id:category_id});
    if (!category){
        const error=new Error('الفئة غير موجوده');
        error.code=404;
        throw error;
    }
    let post =Post.findOne({_id:_id});
    if (!post){
        const error=new Error('غير موجود');
        error.code=404;
        throw error;
    }
    post=new Post({title:title,description:description});
    await post.save();
    return {message:"تم الحفظ بنجاح",status:1};
};

exports.destroy=async (parentValue,{_id})=>{
  let post =Post.findOne({_id:_id});
  if (!post){
      const error=new Error('غير موجود');
      error.code=404;
      throw error;
  }
  await post.deleteOne();
  return {message:"تم الحذف بنجاح",status:1};
};
