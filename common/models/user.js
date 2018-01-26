let app = require('../../server/server.js');
'use strict';
module.exports = function (User) {
    let Role;
    let RoleMapping;

    User.on('attached', (a) => {
        //Setup to access the app onject
        Role = app.models.Role;
        RoleMapping = app.models.RoleMapping;
    })
    User.observe('after save', (context, next) => {

        const userId = context.instance.id;
        const typeOfStaff = context.instance.staff;

        Role.findOne({ where: { name: typeOfStaff } }, (err, role) => {
            //find the role from our db
            if (err) { return console.log(err); }
            //map the role to user that just got saved
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: userId,
                roleId: role.id
            }, function (err, principal) {
                if (err) { return reject(err); }
                console.log('Created principal:', principal);
            })

        })

        Role.registerResolver(typeOfStaff, function (role1, context, cb) {
            console.log(role1);
            function reject(err) {
                if (err) {
                    console.log(err);
                    return cb(err);
                }
                cb(null, false);
            }

            if (err) {
                return retject(err)
            };

            console.log('hey')
            cb(null, true);
        });

        next();
    })
}