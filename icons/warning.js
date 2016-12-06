"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Warning = function Warning(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M15.6 11.3L9.7 1.6C8.8.1 7.3.1 6.4 1.6L.5 11.3C-.5 12.8.2 14 1.9 14h12.2c1.7 0 2.4-1.2 1.5-2.7zM8 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm.8-3H7.2L7 4h2l-.2 5z" })
		)
	);
};

exports.default = Warning;