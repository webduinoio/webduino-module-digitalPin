+(function(window, webduino) {
    'use strict';
    window.getDigitalPin = function(board, pin) {
        return new webduino.module.DigitalPin(board, pin);
    };
}(window, window.webduino));