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
        <span>App</span>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
