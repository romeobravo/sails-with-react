var React = require('react');
var Dispatcher = require('./dispatcher/Dispatcher');
var Actions = require('./actions/Actions');
var Constants = require('./constants/Constants');

var RouteStore = require('./stores/RouteStore');

var routes = require('./routes');
var router = require('./lib/router');
var pathfinder = require('./lib/pathfinder');

RouteStore.on('change', function() {
  React.render(router.run(RouteStore.get()), document.getElementById('react-root'));
});

router.init({
  routes: routes
});

pathfinder.init({
  action: Actions.changeRoute,
  CHANGE_EVENT: Constants.APP_CHANGE_ROUTE
});

