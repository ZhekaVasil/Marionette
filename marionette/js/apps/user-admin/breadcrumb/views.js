var BreadCrumbView = Marionette.ItemView.extend({
  tagName: 'li',
  template: _.template('<a href="#"><%=title%></a>'),
  events : {
    'click a': 'fireTrigger'
  },
  fireTrigger: function (e) {
    e.preventDefault();
    this.model.select();
  }
});

var BreadCrumbList = Marionette.CollectionView.extend({
  tagName: 'ol',
  className: 'breadcrumb',
  childView: BreadCrumbView
});