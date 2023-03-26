const {GraphQLString,GraphQLFloat,GraphQLInt}=require('graphql');


const {InsecticideType} =require('./types');
const {GeneralStringType} =require('../StringType');
const {create,update,destroy}=require('../../../controllers/graphql/insecticideResolver');

exports.createInsecticide={
    type:InsecticideType,
    args:{
        name:{
            name:'name',
            type:GraphQLString,
        },
        description:{
            name:'description',
            type:GraphQLString,
        },
        attachment:{
            name:'attachment',
            type:GraphQLString,
        }
    },
    resolve:create
};

exports.updateInsecticide={
    type:InsecticideType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        },
        name:{
            name:'name',
            type:GraphQLString,
        },
        description:{
            name:'description',
            type:GraphQLString,
        },
        attachment:{
            name:'attachment',
            type:GraphQLString,
        }
    },
    resolve:update
};

exports.deleteInsecticide={
    type:GeneralStringType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        }
    },
    resolve:destroy
};
