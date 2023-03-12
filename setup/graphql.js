
let { graphqlHTTP } = require('express-graphql');
const graphqlSchema=require('../util/graphql/index');
const authentication=require('../util/middleware/authentication');
const serverConfig=require('../util/config/server_config');

const setupGraphQl=function (app) {

    app.use(authentication);
    app.use(serverConfig.graphql.endpoint,graphqlHTTP(request=>({
        schema:graphqlSchema,
        graphiql: serverConfig.graphql.ide,
        pretty: serverConfig.graphql.pretty,
        context:{
            auth:{
                user:request.user,
                isAuthenticated: request.user && request.user._id > 0
            }
        },
        customFormatErrorFn(error){
            if(!error.originalError){
                return error;
            }

            const message =error.message||'An error occurred!';
            const code =error.originalError.code || 500;
            return {message:message,code:code,status:-1};
        }
    })));
}

module.exports=setupGraphQl;