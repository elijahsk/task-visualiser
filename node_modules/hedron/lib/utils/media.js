'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultBreakpoints = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  @media (min-width: ', 'px) {\n    ', '\n  }'], ['\n  @media (min-width: ', 'px) {\n    ', '\n  }']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultBreakpoints = exports.defaultBreakpoints = {
  sm: 500,
  md: 768,
  lg: 1100
};

var query = function query(size) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBreakpoints;
  return function () {
    return (0, _styledComponents.css)(_templateObject, breakpoints[size] || defaultBreakpoints[size], _styledComponents.css.apply(undefined, arguments));
  };
};

exports.default = Object.keys(defaultBreakpoints).reduce(function (acc, label) {
  var accumulator = acc;
  accumulator[label] = function (breakpoints) {
    return query(label, breakpoints);
  };
  return accumulator;
}, {});