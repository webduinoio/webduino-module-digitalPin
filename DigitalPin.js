+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';
    var DigitalPin_MESSAGE = [0x04, 0x40];
    var DigitalPinEvent = {
        READ: 'read',
        READ_ERROR: 'readError'
    };

    var Module = scope.Module,
        BoardEvent = scope.BoardEvent,
        proto;
    var self;
    var string = '';
    var list = [];
    var readCallback = function() {}
    DigitalPin.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: DigitalPin
        }
    });

    function DigitalPin(board, pin) {
        Module.call(this);
        self = this;
        self.pin = pin;
        self.val = 0;
        this._board = board;
        self._messageHandler = onMessage.bind(this);
        board.on(BoardEvent.SYSEX_MESSAGE, self._messageHandler);
    }

    function onMessage(event) {
        var message = event.message;
        if (message[0] !== DigitalPin_MESSAGE[0] || message[1] !== DigitalPin_MESSAGE[1]) {
            return;
        } else {
            processDigitalPinData(this, message);
        }
    }

    function processDigitalPinData(self, data) {
        var rxData = [];
        // data[2]: pin , data[3]: pinValue
        self.pin = data[2];
        self.val = data[3];
        readCallback();
    }

    proto.read = function(callback) {
        readCallback = callback;
    }

    scope.module.DigitalPin = DigitalPin;
}));