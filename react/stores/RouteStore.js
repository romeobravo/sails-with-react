'use strict'

var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');

var _route = '/';

var CHANGE_EVENT = 'change';

function updateRoute(data) {
  _route = data.route;
}

var RouteStore = Object.assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  get() {
    return _route;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
Dispatcher.register(function(action) {
  var text;
  switch(action.actionType) {
    case Constants.APP_CHANGE_ROUTE:
      updateRoute(action.data)
      RouteStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = RouteStore;
