"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Attachment = function Attachment(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M9.2 1C7.5 1 6 2.5 6 4.2V10c0 1.1.9 2 2 2s2-.9 2-2V5H8.5v5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V4.2c0-1 .8-1.8 1.8-1.8s1.7.9 1.7 1.8v6.2c0 1.7-1.3 3-3 3s-3-1.3-3-3V5H3.5v5.5C3.5 13 5.5 15 8 15s4.5-2 4.5-4.5V4.2C12.5 2.5 11 1 9.2 1z" })
		)
	);
};

exports.default = Attachment;