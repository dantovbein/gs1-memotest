'use strict';


var app = {

  initialize: function () {
    this.bindEvents();
  },

  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },

  onDeviceReady: function () {
    app.receivedEvent('deviceready');
  },

  receivedEvent: function (id) {
    console.log('Received Event: ' + id);

    switch (id) {
      case 'deviceready':
        app.startApp();
        break;
    }
  },

  startApp: function () {
    alert('start app');
  }
};