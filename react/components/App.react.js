var React      = require('react');
var HelloWorld = require('./HelloWorld.react');

var App = React.createClass({
  getInitialState: function() {
    return { route: this.props.route.pathname };
  },
  componentDidMount: function() {

  },
  render: function() {
    return (
      <div>
        <HelloWorld />
        <span>{this.state.route.pathname}</span>
      </div>
    );
  }
});

module.exports = App;