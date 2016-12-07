"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = function Code(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M5.3 12.7L.6 8l4.7-4.7 1.4 1.4L3.4 8l3.3 3.3M10.7 12.7l-1.4-1.4L12.6 8 9.3 4.7l1.4-1.4L15.4 8" })
		)
	);
};

exports.default = Code;