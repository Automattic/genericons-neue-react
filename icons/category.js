"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = function Category(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M13 5H8l-.7-1.4c-.2-.4-.5-.6-.9-.6H3c-.5 0-1 .5-1 1v8c0 .6.5 1 1 1h10c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1z" })
		)
	);
};

exports.default = Category;