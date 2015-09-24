var React = require('react');
var Dispatcher = require('../../dispatcher/Dispatcher')
var Actions = require('../../actions/Actions');

var Email = require('./Email.react');

var LogIn = React.createClass({
  handleSubmit(e) {
    var self = this;
    e.preventDefault();
    Actions.login({});
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Email />
        <input className="password" type="text"/>
        <button onclassName="log-in">Log In</button>
      </form>
    );
  }
});

module.exports = LogIn;
