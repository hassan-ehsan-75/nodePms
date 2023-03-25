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

const PlantStageType=new GraphQLObjectType({
    name:'plantStage',
    description:'Plant Stage Type',
    fields:()=>({
        _id:{type:GraphQLString},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        attachment:{type:GraphQLString},
        order:{type:GraphQLInt},
        plant:{type:PlantType},

    })
});

module.exports={PlantType,PlantStageType};