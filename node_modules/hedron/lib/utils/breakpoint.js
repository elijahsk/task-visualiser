'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breakpoint = function breakpoint(name, getStyle) {
  return function (props) {
    return _media2.default[name] ? _media2.default[name](props.breakpoints)(_templateObject, function (props) {
      return getStyle(props, name);
    }) : getStyle(props, name);
  };
};

exports.default = breakpoint;