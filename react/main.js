var React       = require('react');
var App         = require('./App.react');

var route = {
  pathname: window.location.pathname,
  search: window.location.search
};

React.render(
  <App route={route} />, 
  document.getElementById('react-root')
);
