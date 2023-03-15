// Imports
const { GraphQLObjectType } =require('graphql');

// App Imports
const user =require( '../../../models/graphql/user/mutation');
const plant =require( '../../../models/graphql/plant/mutation');
const category =require( '../../../models/graphql/category/mutation');
const post =require( '../../../models/graphql/post/mutation');

// Query
const mutation = new GraphQLObjectType({
    name: 'mutation',
    description: 'API Mutations [Create, Update, Delete]',
    fields: () => ({
        ...user,
        ...plant,
        ...category,
        ...post,
    })
});

module.exports= mutation;