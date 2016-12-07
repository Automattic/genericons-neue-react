"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Unapprove = function Unapprove(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm4 6c0 .7-.2 1.4-.6 2L6 4.6c.6-.4 1.3-.6 2-.6 2.2 0 4 1.8 4 4zM4 8c0-.7.2-1.4.6-2l5.5 5.5c-.7.3-1.4.5-2.1.5-2.2 0-4-1.8-4-4z" })
		)
	);
};

exports.default = Unapprove;