"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tag = function Tag(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M11.3 4.3c-.2-.2-.4-.3-.7-.3H3c-.5 0-1 .5-1 1v6c0 .6.5 1 1 1h7.6c.3 0 .5-.1.7-.3L15 8l-3.7-3.7zM10 9c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" })
		)
	);
};

exports.default = Tag;