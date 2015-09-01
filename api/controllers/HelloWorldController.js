/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

require("babel/register")({experimental: true});
var React = require('react/addons');
var Timer = require('../../react/components/HelloWorld.react');

module.exports = {
  get: function(req, res) {
    sails.log(Timer);
    var TimerComp = React.createElement(Timer);
    sails.log(TimerComp);
    var str = React.renderToString(TimerComp);
    sails.log('Str', str);
    console.log('hello');
    return res.view('homepage', {
      react: str
    });
  }
};

