'use strict'

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'CHANGE';

function sameOrigin(href) {
  var origin = location.protocol + '//' + location.hostname;
  if (location.port) origin += ':' + location.port;
  return (href && (0 === href.indexOf(origin)));
}

class Pathfinder extends EventEmitter {
  constructor() {
    super();
  }

  init(settings) {
    this.CHANGE_EVENT = settings.CHANGE_EVENT || 'CHANGE';
    this.action = settings.action
    this.popState();
    this.hook();
  }

  hook() {
    window.addEventListener('click', e => {
      this.onClick(e);
    });
    window.addEventListener('popstate', e => {
      this.popState();
    });
  }

  changePath(url) {
    if (this.action)
      this.action({route: url});
    else
      this.emit(this.CHANGE_EVENT, url);
  }

  onClick(e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (e.defaultPrevented) return;

    var el = e.target;
    while(el && el.nodeName != 'A') {
      el = el.parentNode;
    }
    if(!el || el.nodeName != 'A') return;
    if(el.getAttribute('download') || el.getAttribute('rel') === 'external') return;
    if(el.target) return;
    if(!sameOrigin(el.href)) return;

    e.preventDefault();
    this.pushState(el.pathname);
  }

  pushState(url) {
    history.pushState({}, url, url);
    this.changePath(url);
  }

  popState() {
    this.changePath(window.location.pathname);
  }
}

module.exports = new Pathfinder();
