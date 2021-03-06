'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildMatchFn/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../_lib/buildParseFn/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../../_lib/buildMatchPatternFn/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../../../_lib/parseDecimal/index.js');

var _index8 = _interopRequireDefault(_index7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchOrdinalNumbersPattern = /^(\d+)/i;

var matchWeekdaysPatterns = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|thứ ?2|thứ ?3|thứ ?4|thứ ?5|thứ ?6|thứ ?7)/i,
  long: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
};

var parseWeekdayPatterns = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  long: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
};

var matchMonthsPatterns = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  short: /^(thg[ _]?0?2|thg[ _]?0?3|thg[ _]?0?4|thg[ _]?0?5|thg[ _]?0?6|thg[ _]?0?7|thg[ _]?0?8|thg[ _]?0?9|thg[ _]?10|thg[ _]?11|thg[ _]?12|thg[ _]?0?1)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  long: /^(tháng ?Một|tháng ?Hai|tháng ?Ba|tháng ?Tư|tháng ?Năm|tháng ?Sáu|tháng ?Bảy|tháng ?Tám|tháng ?Chín|tháng ?Mười ?Một|tháng ?Mười ?Hai|tháng ?Mười)/i
};

var parseMonthPatterns = {
  short: [/thg[ _]?0?1$/i, /thg[ _]?0?2/i, /3/, /4/, /5/, /6/, /7/, /8/, /9/, /10/, /11/, /12/],
  long: [/tháng ?Một$/i, /tháng ?Hai$/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i, /Tám/i, /Chín/i, /Mười$/i, /Mười ?Một$/i, /Mười ?Hai$/i]
};

// `timeOfDay` is used to designate which part of the day it is, when used with 12-hour clock.
// Use the system which is used the most commonly in the locale.
// For example, if the country doesn't use a.m./p.m., you can use `night`/`morning`/`afternoon`/`evening`:
//
//   var matchTimesOfDayPatterns = {
//     long: /^((in the)? (night|morning|afternoon|evening?))/i
//   }
//
//   var parseTimeOfDayPatterns = {
//     any: [/(night|morning)/i, /(afternoon|evening)/i]
//   }
var matchTimesOfDayPatterns = {
  short: /^(am|pm)/i,
  // NOTE: I'm using long pattern as localized Vietnamese version
  long: /^(sa|ch)/i
};

var parseTimeOfDayPatterns = {
  short: [/^am/i, /^pm/i],
  long: [/^sa/i, /^ch/i]
};

var match = {
  ordinalNumbers: (0, _index6.default)(matchOrdinalNumbersPattern),
  ordinalNumber: _index8.default,
  weekdays: (0, _index2.default)(matchWeekdaysPatterns, 'long'),
  weekday: (0, _index4.default)(parseWeekdayPatterns, 'long'),
  months: (0, _index2.default)(matchMonthsPatterns, 'short'), // Vietnamese prefer month as number
  month: (0, _index4.default)(parseMonthPatterns, 'short'),
  timesOfDay: (0, _index2.default)(matchTimesOfDayPatterns, 'short'), // Vietnamese prefer am/pm
  timeOfDay: (0, _index4.default)(parseTimeOfDayPatterns, 'short')
};

exports.default = match;
module.exports = exports['default'];