var UserModule = function (settings) {
  var initialData = settings.initialData || [];

  var module = {};
  module.app = settings.app || {} ;

  module.collection = new UsersCollection(initialData);

  module.router = new UserRouter({module: module});

  module.controller = new UserController({module: module});

  return module
};