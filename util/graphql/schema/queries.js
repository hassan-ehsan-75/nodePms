// Imports
const { GraphQLObjectType } =require('graphql');

// App Imports
const user =require( '../../../models/graphql/user/query');

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',
    fields: () => ({
        ...user
    })
});

module.exports= query;