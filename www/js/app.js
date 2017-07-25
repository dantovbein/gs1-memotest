define(function(require) {
  'use strict';

  /*var $                 = require('jquery'),
    _                 = require('underscore'),
    Backbone          = require('backbone'),
    router            = require('router'),
    state             = require('state'),
    preferenceService = require('preferenceService'),
    config            = require('config'),
    navBarView        = require('NavBarView'),
    sounds            = require('sounds'),
    analytics         = require('analytics'),
    FastClick         = require('fastclick'),
    Push              = require('Push'),
    userModel         = require('UserModel'),
    keepAppResponsive = require('keepAppResponsive'),
    Globals           = require('Globals');*/

  return new function() {
    var _self = this;

    this.initialize = function() {

      document.addEventListener('deviceready', function() {
       // sounds.initialize();
        //sounds.intro();

        //_self.onDeviceReady();
      }, false);

    };

  };
});