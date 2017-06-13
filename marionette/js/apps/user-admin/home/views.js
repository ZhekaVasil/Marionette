var IndexView = Marionette.ItemView.extend({
  template: '#index-template',
  events: {
    'click #nav-users-index' : 'showUserList'
  },
  showUserList : function (e) {
    e.preventDefault();
    UserAdmin.trigger('user:listing:requested');
  }
});

