const { GraphQLInt, GraphQLString,GraphQLFloat, GraphQLObjectType } = require('graphql');
const {categoryType}=require('../category/types');

const PlantType=new GraphQLObjectType({
    name:'plant',
    description:'Plant Type',
    fields:()=>({
        _id:{type:GraphQLString},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        image:{type:GraphQLString},
        price:{type:GraphQLFloat},
        category: {type: categoryType},

    })
});

module.exports={PlantType};