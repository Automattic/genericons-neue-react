"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Unsubscribe = function Unsubscribe(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M15 9h-5c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zm0 4h-5v-1h5v1zm-3-5V5c0-1.1-.9-2-2-2H2C.9 3 0 3.9 0 5v5c0 1.1.9 2 2 2h6v-2c0-1.2.8-2 2-2h2zM6 9.1L1 6.2V5l5 2.9L11 5v1.2L6 9.1z" })
		)
	);
};

exports.default = Unsubscribe;