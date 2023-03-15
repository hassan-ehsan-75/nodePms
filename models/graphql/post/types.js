const {GraphQLInt,GraphQLString,GraphQLObjectType}=require('graphql');
const {categoryType}=require('../category/types');

const postType=new GraphQLObjectType({
    name:'post',
    description:'Post Type',
    fields:()=>({
        _id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        attachment: {type: GraphQLString},
        category: {type: categoryType},
    })
});

module.exports={postType};