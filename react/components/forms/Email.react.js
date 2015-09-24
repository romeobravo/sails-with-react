var React = require('react');
var cx    = require('classnames');

var Email = React.createClass({
  getInitialStatefunction() {
    return {
      value : "",
      valid: false
    }
  },
  complyRegex(value) {
    var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}/i;
    if(regex.test(value)) {
      this.setState({
        value: value,
        valid: true
      })
    } else {
      this.setState({
        value: value,
        valid: false
      })
    }
  },
  handleChange(e) {
    this.complyRegex(e.target.value)
  },
  render() {
    var classes = cx({
      'input': true,
      'email': true,
      'valid': this.state.valid
    });
    return (
      <input onChange={this.handleChange} className={classes} type="text" value={this.state.value}/>
    );
  }
});

module.exports = Email;
