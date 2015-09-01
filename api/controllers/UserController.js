/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

require("babel/register")({experimental: true});
var React = require('react/addons');
var Timer = require('../../public/react/Timer.react');

module.exports = {
  helloWorld: function(req, res) {
    sails.log(Timer);
    var TimerComp = React.createElement(Timer);
    sails.log(TimerComp);
    var str = React.renderToString(TimerComp);
    sails.log('Str', str);
    console.log('hello');
    return res.render('homepage', {
      react: str
    });
  }
};

