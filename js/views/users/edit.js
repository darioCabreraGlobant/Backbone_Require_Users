define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/users',
  'text!templates/users/edit.html'
], function($, _, Backbone, UsersCollection, projectsListTemplate){
  var UsersEditView = Backbone.View.extend({
    tagName:  'div',
    template: _.template($.get('/templates/users/edit.html').html()),
    events: {
      'submit .edit-user-form': 'saveUser'
    },

  saveUser: function (ev) {
    var userDetails = $(ev.currentTarget).serializeObject();
    var user = new User();
    user.save(userDetails, {
      success: function (user) {
       // router.navigate('', {trigger:true});
      }
    });
    return false;
  },

    render: function(options) {
      var that = this;
      if(options.id) {
        that.user = new User({id: options.id});
        that.user.fetch({
          success: function (user) {
            this.$el.html(this.template(this.model.toJSON()));
          }
        });
      } else {
        this.$el.html(this.template(this.model.toJSON()));
      }
    }
  });
  return UsersEditView;
});