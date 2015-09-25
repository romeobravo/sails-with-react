var App = require('./components/App.react');
var About = require('./components/About.react');
var Login = require('./components/forms/Login.react')

var routes = {
  component: App,
  children: {
    'about': {
      component: About,
      children: {
        'user': {
          component: About
        }
      }
    },
    'profile': {
      component: About,
      children: {
        'picture': {
          component: About
        }
      }
    },
    'login': {
      component: Login
    }
  }
};

module.exports = routes;
