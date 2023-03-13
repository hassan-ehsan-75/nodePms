// Imports
const { GraphQLObjectType } =require('graphql');

// App Imports
const user =require( '../../../models/graphql/user/mutation');
const plant =require( '../../../models/graphql/plant/mutation');

// Query
const mutation = new GraphQLObjectType({
    name: 'mutation',
    description: 'API Mutations [Create, Update, Delete]',
    fields: () => ({
        ...user,
        ...plant
    })
});

module.exports= mutation;