const { GraphQLInt, GraphQLString, GraphQLObjectType } = require('graphql');

const PlantType=new GraphQLObjectType({
    name:'plant',
    description:'Plant Type',
    fields:()=>({
        _id:{type:GraphQLString},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        image:{type:GraphQLString}
    })
});

module.exports={PlantType};