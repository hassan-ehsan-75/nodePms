// Imports
const { GraphQLObjectType } =require('graphql');

// App Imports
const user =require( '../../../models/graphql/user/query');
const plant =require( '../../../models/graphql/plant/query');
const category =require( '../../../models/graphql/category/query');
const post =require( '../../../models/graphql/post/query');
const crop =require( '../../../models/graphql/crop/query');
const insecticide =require( '../../../models/graphql/insecticide/query');

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [Read]',
    fields: () => ({
        ...user,
        ...plant,
        ...category,
        ...post,
        ...crop,
        ...insecticide,
    })
});

module.exports= query;