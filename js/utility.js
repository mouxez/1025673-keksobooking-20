'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  var isEscEvent = function (evt, action) {
    if (evt.key === ESC_KEY) {
      action();
    }
  };

  var isEnterEvent = function (evt, action, parameter) {
    if (evt.key === ENTER_KEY) {
      action(parameter);
    }
  };

  var getDeclension = function (number, nouns) {
    var moduloValueFromTen = number % 10;
    var moduloValueFromHundred = number % 100;
    var residueValueZero = 0;
    var residueValueOne = 1;
    var residueValueFour = 4;
    var residueValueFive = 5;
    var residueValueTwenty = 20;

    if (moduloValueFromTen === residueValueZero || moduloValueFromHundred > residueValueFour && moduloValueFromHundred < residueValueTwenty) {
      return number + ' ' + nouns[2];
    } else if (moduloValueFromTen === residueValueOne) {
      return number + ' ' + nouns[0];
    } else if (moduloValueFromTen > residueValueOne && moduloValueFromTen < residueValueFive) {
      return number + ' ' + nouns[1];
    }

    return number + ' ' + nouns[2];
  };

  window.utility = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getDeclension: getDeclension
  };
})();
