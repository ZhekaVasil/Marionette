var BreadcrumbModule = function (settings) {

  var initialData = settings.initialData || [];
  var module = {};
  var collection = new BreadCrumbCollection(initialData);
  var region = settings.region;
  var view = new BreadCrumbList({collection: collection});

  module.app = settings.app || {};

  module.setCrumbs = function(data){
    collection.reset(data);
  };

  collection.on('breadcrumb:selected', function (crumb) {
    module.app.trigger(crumb.get('trigger'));
  });


  module.show = function () {
    if(region){
      region.show(view)
    } else {
      throw "cant show bread without region"
    }
  };

  return module;
};