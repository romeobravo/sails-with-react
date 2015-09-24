var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  /**
   * @param  {string} text
   */
  login(data) {
    Dispatcher.dispatch({
      actionType: Constants.APP_LOGIN,
      data: data
    });
  },

  changeRoute(data) {
    Dispatcher.dispatch({
      actionType: Constants.APP_CHANGE_ROUTE,
      data: data
    });
  }

};

module.exports = Actions;
