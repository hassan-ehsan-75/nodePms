const {GraphQLString,GraphQLList}=require('graphql');
const {PlantType} =require('./types');
const {GeneralStringType} =require('../StringType');
const {create,update,destroy}=require('../../../controllers/graphql/plantResolver');

exports.createPlant={
    type:PlantType,
    args:{
        name:{
            name:'name',
            type:GraphQLString,
        },
        description:{
            name:'description',
            type:GraphQLString,
        }
    },
    resolve:create
};

exports.updatePlant={
    type:PlantType,
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
        }
    },
    resolve:update
};

exports.deletePlant={
    type:GeneralStringType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        }
    },
    resolve:destroy
};
