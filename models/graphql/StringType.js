const {GraphQLString,GraphQLInt,GraphQLObjectType} =require('graphql');

const GeneralStringType=new GraphQLObjectType({
    name:"GeneralString",
    description:"General String Type",
    fields:()=>({
       message:{
           type:GraphQLString
       },

        status:{
            type:GraphQLInt
        }
    })
});

module.exports={GeneralStringType};