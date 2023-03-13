// Imports
const { GraphQLObjectType } =require('graphql');

// App Imports
const user =require( '../../../models/graphql/user/query');
const plant =require( '../../../models/graphql/plant/query');

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',
    fields: () => ({
        ...user,
        ...plant,
    })
});

module.exports= query;