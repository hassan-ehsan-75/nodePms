const {GraphQLString}=require('graphql');
const {cropType}=require('./types');
const {GeneralStringType}=require('../StringType');
const {create,update,destroy}=require('../../../controllers/graphql/cropResolver');

exports.createCrop={
    type:cropType,
    args:{
        name:{
            name:"name",
            type:GraphQLString
        },
        description:{
            name:"description",
            type:GraphQLString
        },
        crop_date:{
            name:"crop_date",
            type:GraphQLString
        },
    },
    resolve:create
};
exports.updateCrop={
    type:GeneralStringType,
    args:{
        _id:{
            name:"_id",
            type:GraphQLString
        },
        name:{
            name:"name",
            type:GraphQLString
        },
        description:{
            name:"description",
            type:GraphQLString
        },
        crop_date:{
            name:"crop_date",
            type:GraphQLString
        },
    },
    resolve:update
};
exports.destroyCrop={
    type:GeneralStringType,
    args: {
        _id: {
            name: "_id",
            type: GraphQLString
        }
    },
    resolve:destroy
};