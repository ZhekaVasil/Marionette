var UserLayoutView = Marionette.LayoutView.extend({
  template: '#user-layout-template',
  regions: {
    summary: '#summary',
    detail: '#detail'
  }
});

var UserSummaryView = Marionette.ItemView.extend({
  template : '#summary-template'
});

var UserDetailView = Marionette.ItemView.extend({
  template : '#detail-template'
});

var UserItemView = Marionette.ItemView.extend({
  tagName: 'tr',
  template: _.template("<td><a href='#'><%=email%></a></td>"),
  events : {
    'click a': 'showUserDetail'
  },
  showUserDetail: function (e) {
    e.preventDefault();
    this.model.select();
  }
});

var UserListView = Marionette.CollectionView.extend({
  tagName : 'table',
  className: 'table table-stripped',
  childView: UserItemView,
  onBeforeRender : function () {
    this.$el.append('<h2>User List</h2>');
  }

});