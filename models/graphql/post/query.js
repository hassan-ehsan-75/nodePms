const {GraphQLInt,GraphQLString,GraphQLList}=require('graphql');
const {postType}=require('./types');
const {getAll}=require('../../../controllers/graphql/postResolver');

exports.posts={
    type:new GraphQLList(postType),
    resolve:getAll
};