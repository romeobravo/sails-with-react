var React = require('react');
var Dispatcher = require('../../dispatcher/Dispatcher')
var Actions = require('../../actions/Actions');

var Email = require('./Email.react');
var Password = require('./Password.react');

var LogIn = React.createClass({
  getInitialState() {
    return {
      email: {
        value: "",
        valid: false
      },
      password: {
        value: ""
      }
    };
  },
  handleUpdate(fieldState) {
    this.setState(fieldState);
  },
  handleSubmit(e) {
    e.preventDefault();
    var data = {
      email: this.state.email.value,
      password: this.state.password.value
    };
    Actions.login(data);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Email name="email" field={this.state.email} update={this.handleUpdate} />
        <Password name="password" field={this.state.password} update={this.handleUpdate} />
        <button className="log-in">Log In</button>
      </form>
    );
  }
});

module.exports = LogIn;
