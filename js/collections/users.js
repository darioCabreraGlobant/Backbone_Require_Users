define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'models/users'
], function(_, Backbone, UserModel){
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    localStorage: new Backbone.LocalStorage('users-local-storage')
  });
  // You don't usually return a collection instantiated
  return UsersCollection;
});