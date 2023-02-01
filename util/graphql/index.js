
const { GraphQLSchema }=require('graphql');
const query =require('./schema/queries');

const appSchema=new GraphQLSchema({
    query
});

module.exports= appSchema;