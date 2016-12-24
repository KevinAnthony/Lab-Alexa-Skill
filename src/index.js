'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.ef048e19-df64-4b63-afe5-878ebbe97317';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'RunIntent': function (intent, session, response) {
        this.emit('Play');
    },
    'AMAZON.HelpIntent': function (intent, session, response) {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
        'AMAZON.CancelIntent': function (intent, session, response) {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
        'AMAZON.StopIntent': function (intent, session, response) {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
}
