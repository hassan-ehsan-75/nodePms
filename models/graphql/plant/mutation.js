const {GraphQLString,GraphQLFloat,GraphQLInt}=require('graphql');


const {PlantType} =require('./types');
const {PlantStageType} =require('./types');
const {GeneralStringType} =require('../StringType');
const {create,update,destroy,addPlantStage,updatePlantStage,destroyPlantStage}=require('../../../controllers/graphql/plantResolver');

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
        },
        price:{
            name:'price',
            type:GraphQLFloat,
        },
        category_id:{
            name:'category_id',
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
        },
        price:{
            name:'price',
            type:GraphQLFloat,
        },
        category_id:{
            name:'category_id',
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

exports.AddPlantStage={
    type:PlantStageType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        },
        title:{
            name:'title',
            type:GraphQLString,
        },
        description:{
            name:'description',
            type:GraphQLString,
        },
        order:{
            name:'order',
            type:GraphQLInt,
        },
        attachment:{
            name:'attachment',
            type:GraphQLString,
        }
    },
    resolve:addPlantStage
};

exports.updatePlant={
    type:PlantType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        },
        title:{
            name:'title',
            type:GraphQLString,
        },
        description:{
            name:'description',
            type:GraphQLString,
        },
        order:{
            name:'order',
            type:GraphQLInt,
        },
        attachment:{
            name:'attachment',
            type:GraphQLString,
        }
    },
    resolve:updatePlantStage
};

exports.deletePlant={
    type:GeneralStringType,
    args:{
        _id:{
            name:'_id',
            type:GraphQLString
        }
    },
    resolve:destroyPlantStage
};

