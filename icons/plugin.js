"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plugin = function Plugin(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M11 6.5V3c0-.6-.4-1-1-1s-1 .4-1 1v3.5H7V3c0-.6-.4-1-1-1s-1 .4-1 1v3.5H3V10c0 1.1.9 2 2 2h2v3l2-.5V12h2c1.1 0 2-.9 2-2V6.5h-2z" })
		)
	);
};

exports.default = Plugin;