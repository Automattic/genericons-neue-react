"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trash = function Trash(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M5.9 13h4.3c.5 0 .9-.4 1-.9l.8-6.6H4l.9 6.6c.1.5.5.9 1 .9zM11 3c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1L3 4v1h10V4l-2-1zM9.5 4h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5.2.5.5s-.2.5-.5.5z" })
		)
	);
};

exports.default = Trash;