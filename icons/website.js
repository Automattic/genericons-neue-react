"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Website = function Website(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm3.9 3.8h-1.5c-.1-.7-.2-1.3-.4-1.8.7.3 1.4 1 1.9 1.8zm.6 2.2c0 .3 0 .5-.1.8h-1.9V8v-.8h1.9c.1.3.1.5.1.8zM8 12.5c-.2-.2-.6-.9-.8-2.2h1.6c-.2 1.2-.6 2-.8 2.2zM7 8.8V8v-.8h2v1.6H7zM3.5 8c0-.3 0-.5.1-.8h1.9v1.6H3.6c-.1-.3-.1-.5-.1-.8zM8 3.5c.2.1.6.9.8 2.2H7.2c.2-1.3.6-2.1.8-2.2zm-1.9.4c-.2.6-.3 1.2-.4 1.9H4.1c.5-.8 1.2-1.5 2-1.9zm-2 6.3h1.5c.1.7.2 1.3.4 1.8-.7-.3-1.4-1-1.9-1.8zm5.8 1.9c.2-.5.3-1.1.4-1.8h1.5c-.4.7-1.1 1.4-1.9 1.8z" })
		)
	);
};

exports.default = Website;