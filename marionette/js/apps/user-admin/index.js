var UserAdmin = new Marionette.Application();

UserAdmin.addRegions({
  mainRegion: '#app',
  navRegion: '#breadcrumbs'
});

UserAdmin.addInitializer(function () {
  UserAdmin.breadCrumbs = new BreadcrumbModule({
    app: UserAdmin,
    region: UserAdmin.navRegion,
    initialData: {title:'Home'}
  });
  UserAdmin.user = new UserModule({app: UserAdmin});
  UserAdmin.home = new HomeModule({app: UserAdmin});
});

UserAdmin.addInitializer(function () {
  var crumbs = {
    home: {title: 'Home', trigger: 'index:requested'},
    list: {title: 'UserListing', trigger: 'user:listing:requested'}
  };

  UserAdmin.breadCrumbs.show();

  UserAdmin.on('user:selected', function(selectedUser){
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, {title: selectedUser.get('email')}]);
  });
  UserAdmin.on('user:listing:requested', function () {
    UserAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
  });
  UserAdmin.on('index:requested', function () {
    UserAdmin.breadCrumbs.setCrumbs(crumbs.home);
  });
});


UserAdmin.addInitializer(function () {

  UserAdmin.on('user:selected', function(selectedUser){
    UserAdmin.user.controller.showUserDetail(selectedUser);
  });
  UserAdmin.on('user:listing:requested', function () {
    UserAdmin.user.controller.showUserList();
  });
});

UserAdmin.addInitializer(function () {
  UserAdmin.on('index:requested', function () {
    UserAdmin.home.controller.showIndex();
  });

  Backbone.history.start();
});