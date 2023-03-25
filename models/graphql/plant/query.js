const {GraphQLString,GraphQLList}=require('graphql');
const {PlantType} =require('./types');
const {PlantStageType} =require('./types');
const {getAll,getAllStages}=require('../../../controllers/graphql/plantResolver');

exports.plants={
    type:GraphQLList(PlantType),
    resolve:getAll
};

exports.plantStages={
    type:GraphQLList(PlantStageType),
    args:{
      _id:{
          name:'_id',
          type:GraphQLString
      }
    },
    resolve:getAllStages
};
