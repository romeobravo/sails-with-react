var React = require('react');

function addToPath(path, string) {
  var arr = string.split('/');
  return path.concat(arr);
}

function matchPart(routePart, pathPart) {
  if(pathPart[0] == ':') {
    // parameter
    return true
  } else if(routePart == pathPart) {
    return true
  } else {
    return true
  }
}

function match(route, path) {
  if(route.length != path.length) {
    return false;
  }
  for(var i = 0; i < route.length; i++) {
    if(!matchPart(route[i], path[i])) {
      return false;
    }
  }
  return true;
}

function find(node, route, path) {
  var res = {
    match: false
  };
  for(var child in node.children) {
    if(!node.children.hasOwnProperty(child) || res.match) {
      continue;
    }
    path = addToPath(path, child);
    res = find(node.children[child], route, path);
    path.pop();
  }
  if(res.match) {
    return {
      match: true,
      component: React.createElement(node.component, {}, res.component)
    };
  } else if(match(route, path)) {
    return {
      match: true,
      component: React.createElement(node.component)
    };
  } else {
    return {
      match: false
    };
  }
}

var router = {
  init(settings) {
    var self = this;
    self.routes = settings.routes;
  },
  run(route) {
    route = route.substring(1).split('/');
    var root = this.routes['/'];
    var path = [];
    var chain = find(root, route, path);
    return chain.component;
  }
};

module.exports = router;
