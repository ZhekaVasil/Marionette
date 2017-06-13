var User = Backbone.Model.extend({
  urlRoot : 'https://jsonplaceholder.typicode.com/users',
  validate : function (attr, opt) {
    if(!(attr.email && attr.userName)){
      return 'Need an email AND a userName'
    }
  },
  initalize : function () {
    this.on('invalid', function (m) {
      alert(m.validationError)
    })
  },
  select: function () {
    UserAdmin.trigger('user:selected', this)
  },
  parse: function (model) {
    model.gravatarUrl= function () {
      return 'https://www.gravatar.com/avatar/m';
    };
    return model;
  }
});

var UsersCollection = Backbone.Collection.extend({
  url : 'https://jsonplaceholder.typicode.com/users',
  model: User
});