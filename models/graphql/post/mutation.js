const {GraphQLInt,GraphQLString}=require('graphql');
const {postType}=require('./types');
const {GeneralStringType}=require('../StringType');
const {create,update,destroy}=require('../../../controllers/graphql/postResolver');

exports.createPost={
    type:postType,
    args:{
        title:{
            name:"title",
            type:GraphQLString
        },
        description:{
            name:"description",
            type:GraphQLString
        },
        category_id:{
            name:"category_id",
            type:GraphQLString
        },
    },
    resolve:create
};
exports.updatePost={
    type:GeneralStringType,
    args:{
        _id:{
            name:"_id",
            type:GraphQLString
        },
        title:{
            name:"title",
            type:GraphQLString
        },
        description:{
            name:"description",
            type:GraphQLString
        },
        category_id:{
            name:"category_id",
            type:GraphQLString
        },
    },
    resolve:update
};
exports.destroyPost={
    type:GeneralStringType,
    args: {
        _id: {
            name: "_id",
            type: GraphQLString
        }
    },
    resolve:destroy
};