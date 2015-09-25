var React = require('react');
var cx    = require('classnames');

var password = React.createClass({
  getInitialState() {
    return {
      value: "",
      valid: false
    }
  },
  validate(value) {
    var regex = /.{6,1024}/i;
    var valid = regex.test(value) ? true : false;
    var state = {};
    state[this.props.name] = { value, valid };
    this.props.update(state);
  },
  handleChange(e) {
    this.validate(e.target.value);
  },
  render() {
    var classes = cx({
      input: true,
      password: true,
      valid: this.props.valid
    });
    return (
      <input onChange={this.handleChange} className={classes} type="password" value={this.props.value}/>
    );
  }
});

module.exports = password;
