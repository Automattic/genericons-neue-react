"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Activity = function Activity(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M10 11.8L8.5 7.7l-1.6 3.7c-.3.8-1.4.8-1.8.1L3.9 9l-1.1 1.6-1.6-1.2 2-3c.4-.6 1.4-.6 1.7.1l1 2.1 1.7-4c.3-.8 1.5-.8 1.8 0l1.6 4 2.1-5.9 1.8.6-3 8.5c-.3.9-1.5.9-1.9 0z" })
		)
	);
};

exports.default = Activity;