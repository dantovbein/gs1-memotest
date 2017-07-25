'use strict';

requirejs.config({
  baseUrl: './www/',

  paths: {
    'text':                      'libs/require/plugins/text',
    'json':                      'libs/require/plugins/json',
    'jquery':                    'libs/jquery/jquery-2.1.4.min',
    'backbone':                  'libs/backbone/backbone-min',
    'tweenmax':                  'libs/greensock/TweenMax.min',
    'underscore':                'libs/underscore/underscore-min',
    'CreateSoundjs':             'libs/soundjs/soundjs-0.6.1.min',
    'CordovaAudioPlugin':        'libs/soundjs/CordovaAudioPlugin',
    'CordovaAudioLoader':        'libs/soundjs/CordovaAudioLoader',
    'CordovaAudioSoundInstance': 'libs/soundjs/CordovaAudioSoundInstance',

    'BackboneOverrideSync': 'js/util/backbone-override/sync',

    'app':      'js/app'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    'BackboneOverrideSync': {
      deps: ['backbone']
    },

    'underscore': {
      exports: '_'
    },

    'tweenmax': {
      exports: 'TweenMax'
    },

    'scrollTo': {
      deps: ['tweenmax'],
      exports: 'TweenMax'
    },

    'CreateSoundjs': {
      exports: 'createjs'
    },

    'CordovaAudioPlugin': {
      deps: ['CreateSoundjs', 'CordovaAudioLoader', 'CordovaAudioSoundInstance'],
      exports: 'createjs.CordovaAudioPlugin'
    },

    'CordovaAudioLoader': {
      deps: ['CreateSoundjs'],
      exports: 'createjs.CordovaAudioLoader'
    },

    'CordovaAudioSoundInstance': {
      deps: ['CreateSoundjs'],
      exports: 'createjs.CordovaAudioSoundInstance'
    }
  },

  deps: ['BackboneOverrideSync']
});

requirejs([ 'app'
], function(app) {
  app.initialize();
});
