var React       = require('react');
var App         = require('./components/App.react');

var route = {
  pathname: window.location.pathname,
  search: window.location.search
};

React.render(
  <App route={route} />, 
  document.getElementById('react-root')
);
