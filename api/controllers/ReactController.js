/**
 * ReactController
 *
 * @description :: Server-side logic for managing react
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

require("babel/register")({experimental: true});
var React = require('react/addons');
var App   = require('../../react/components/App.react');

module.exports = {
  get: function(req, res) {
    var route = {
      pathname: req._parsedUrl.pathname,
      search: req._parsedUrl.search
    }
    return res.view('react', {
      react: React.renderToString(React.createElement(App, { route: route }))
    });
  }
};

