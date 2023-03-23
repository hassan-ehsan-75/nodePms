const {GraphQLString,GraphQLObjectType}=require('graphql');

const cropType=new GraphQLObjectType({
    name:'crop',
    description:'Crop Type',
    fields:()=>({
        _id: {type: GraphQLString},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        crop_date: {type: GraphQLString},
    })
});

module.exports={cropType};