const {GraphQLInt,GraphQLString,GraphQLList}=require('graphql');
const {postType}=require('./types');
const {getAll,getPostsByCategory,getPostsById}=require('../../../controllers/graphql/postResolver');

exports.posts={
    type:new GraphQLList(postType),
    resolve:getAll
};
exports.postsByCategory={
    type:new GraphQLList(postType),
    args: {
        category_id: { type: GraphQLString }
    },
    resolve:getPostsByCategory
};
exports.postsById={
    type:postType,
    args: {
        post_id: { type: GraphQLString }
    },
    resolve:getPostsById
};