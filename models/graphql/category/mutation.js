const {GraphQLString,GraphQLInt}=require('graphql');

const {categoryType}=require('./types');
const {GeneralStringType} =require('../StringType');

const {create,update,destroy}=require('../../../controllers/graphql/categoryResolver');

exports.createCategory={
    type:categoryType,
    args:{
        name:{
            type:GraphQLString,
            name:"name"
        }
    },
    resolve:create
};

exports.updateCategory={
    type:GeneralStringType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLInt
        },
        name:{
            type:GraphQLString,
            name:"name"
        }
    },
    resolve:update
};

exports.deleteCategory={
    type:GeneralStringType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLInt
        }
    },
    resolve:destroy
};
