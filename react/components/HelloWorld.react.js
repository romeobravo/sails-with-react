var React = require('react');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <h2>Hello World</h2>
        <div>Alive for: {this.state.secondsElapsed} seconds</div>
      </div>
    );
  }
});

module.exports = HelloWorld;