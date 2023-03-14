const {GraphQLInt,GraphQLString,GraphQLObjectType} =require('graphql');

const categoryType=new GraphQLObjectType({
    name:"category",
    description:"Category Type",
    fields:()=>({
        name:{type:GraphQLString},
    })
});

module.exports={categoryType};