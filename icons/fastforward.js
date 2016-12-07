"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fastforward = function Fastforward(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M14.9 7.1L9.5 3.9C8.8 3.5 8 4 8 4.8v2.5l-.1-.1-5.4-3.3C1.8 3.5 1 4 1 4.8v6.5c0 .8.8 1.3 1.5.9L7.9 9S8 9 8 8.9v2.5c0 .8.8 1.3 1.5.9l5.4-3.2c.7-.6.7-1.6 0-2z" })
		)
	);
};

exports.default = Fastforward;