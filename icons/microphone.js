"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Microphone = function Microphone(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2zm3-2c0 1.7-1.3 3-3 3S5 9.7 5 8H3c0 2.4 1.7 4.4 4 4.9V15h2v-2.1c2.3-.5 4-2.5 4-4.9h-2z" })
		)
	);
};

exports.default = Microphone;