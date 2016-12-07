"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = function Chat(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M7 3H3c-1.1 0-2 .9-2 2v7l2.4-2.4c.4-.4.9-.6 1.4-.6H6V8c0-1.7 1.3-3 3-3 0-1.1-.9-2-2-2zm6 3H9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2.2c.5 0 1 .2 1.4.6L15 15V8c0-1.1-.9-2-2-2z" })
		)
	);
};

exports.default = Chat;