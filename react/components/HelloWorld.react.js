var React = require('react');

var LogIn = require('./forms/LogIn.react')

var HelloWorld = React.createClass({
  getInitialState() {
    return {secondsElapsed: 0};
  },
  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <div>Alive for: {this.state.secondsElapsed} seconds</div>
        <LogIn />
      </div>
    );
  }
});

module.exports = HelloWorld;
