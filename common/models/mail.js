'use strict';

module.exports = function (Mail) {
    Mail.observe('before save', (context, next) => {
        const token = context.options && context.options.accessToken;
        const userId = token && token.userId;
        const user = userId ? userId : "<anonymous>";
        if (!context.instance || user === "<anonymous>") {

            throw {
                
                    "statusCode": 401,
                    "name": "Error",
                    "message": "Authorization Required",
                    "code": "AUTHORIZATION_REQUIRED",

                }
            
        }
        context.instance.senderId = user;
        context.instance.data = Date.now();
        next();
    })
};
