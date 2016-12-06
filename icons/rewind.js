"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rewind = function Rewind(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M1.1 7.1l5.4-3.2c.7-.4 1.5.1 1.5.9v2.5l.1-.1L13.5 4c.7-.5 1.5 0 1.5.8v6.5c0 .8-.8 1.3-1.5.9L8.1 8.9s-.1 0-.1-.1v2.5c0 .8-.8 1.3-1.5.9L1.1 8.9c-.7-.4-.7-1.4 0-1.8z" })
		)
	);
};

exports.default = Rewind;