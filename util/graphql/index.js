
const { GraphQLSchema }=require('graphql');
const query =require('./schema/queries');
const mutations =require('./schema/mutations');

const appSchema=new GraphQLSchema({
    "query":query,
    "mutation":mutations
});

module.exports= appSchema;