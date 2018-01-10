"use strict";

var Alexa = require("alexa-sdk");

var handlers = {
  "SneezeIntent": function () {
    this.response.speak("Bless you");
    this.emit(':responseReady');
  },
  "LaunchRequest": function () {
    this.response.speak("Let me know when you sneeze");
    this.emit(':responseReady');
  }
};

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
