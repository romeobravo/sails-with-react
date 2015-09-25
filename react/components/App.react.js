/* React */
var React      = require('react');

/* Stores */
var UserStore = require('../stores/UserStore');

/* Components */
var HelloWorld = require('./HelloWorld.react');


var App = React.createClass({

  getInitialState() {
    return { route: this.props.route };
  },
  componentDidMount() {

  },
  render() {
    return (
      <div>
        <a href="/">App</a><br/>
        <a href="/login">Login</a>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
