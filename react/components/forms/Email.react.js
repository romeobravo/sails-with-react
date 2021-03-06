var React = require('react');
var cx    = require('classnames');

var Email = React.createClass({
  getInitialState() {
    return {
      value: "",
      valid: false
    }
  },
  validate(value) {
    var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}/i;
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
      email: true,
      valid: this.props.valid
    });
    return (
      <input onChange={this.handleChange} className={classes} type="text" value={this.props.value}/>
    );
  }
});

module.exports = Email;
