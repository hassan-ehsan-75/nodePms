const {  GraphQLString,GraphQLFloat, GraphQLObjectType } = require('graphql');

const InsecticideType=new GraphQLObjectType({
    name:'insecticide',
    description:'Insecticide Type',
    fields:()=>({
        _id:{type:GraphQLString},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        attachment:{type:GraphQLString}

    })
});

module.exports={InsecticideType};