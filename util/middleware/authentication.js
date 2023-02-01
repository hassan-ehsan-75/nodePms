// Imports
const jwt = require('jsonwebtoken');
const serverConfig=require('../config/server_config');


// Authentication middleware
const authentications= function (request, response, next) {
    let authToken = request.headers.authorization

    if (authToken && authToken !== null) {
        try {
            const token = authToken.split(' ')
            request.user = jwt.verify(token[1], serverConfig.secret)
        } catch (e) {
            console.warn('Invalid token detected.')
        }
    } else {
        request.user = {}
    }
    next()
}

module.exports = authentications;
