
// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0


module.exports = function (app) {

  const Role = app.models.Role;
  const User = app.models.user;
  // const RoleMapping = app.models.RoleMapping;
  let appRoles = [];
  Role.find({}, (err, roles) => {
    roles.forEach(role => appRoles.push(role));
  });

  appRoles.forEach(role => {

  Role.registerResolver(typeOfStaff, (role, context, cb)=> {
    // cb(null, true);
    // console.log(context);
    // const userId = context.accessToken.userId;
    // console.log(userId)
    // if(!userId) {
    //   return process.nextTick(() => cb(null, false));
    // }

    Role.registerResolver(typeOfStaff, function (role, context, cb) {
      const token = context.accessToken;
      const userId = token && token.clientId;//get logged in user    
      if (!userId) {
        return process.nextTick(() => cb(null, false));
      }
      if (context.modelName === 'mail' && typeOfStaff === "manager" || typeOfStaff === "staff") {
         cb(null, true);
      }

      if (context.modelName === "user" && typeOfStaff === "admin") {
         cb(null, true);
      }
      //is User Logged In?
      return cb(null, false);
    })
  })
})

};
