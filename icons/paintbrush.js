"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paintbrush = function Paintbrush(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M14.1 1.9c-.6-.6-1.5-.6-2.1 0l-6 6L8.1 10l6-6c.5-.5.5-1.5 0-2.1zM6.5 9.7c-.8-.9-1.9-1.1-2.7-.6-.8.4-1.2 1.3-1.2 2.2-.1.9-.7 1.6-1.6 2 .5.7 2.2 1.2 4.2.5s2.3-2.9 1.3-4.1z" })
		)
	);
};

exports.default = Paintbrush;