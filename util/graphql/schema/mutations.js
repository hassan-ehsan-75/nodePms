// Imports
const { GraphQLObjectType } =require('graphql');

// App Imports
const user =require( '../../../models/graphql/user/mutation');

// Query
const mutation = new GraphQLObjectType({
    name: 'mutation',
    description: 'API Mutations [Create, Update, Delete]',
    fields: () => ({
        ...user
    })
});

module.exports= mutation;