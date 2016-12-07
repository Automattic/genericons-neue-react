"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Print = function Print(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M5 3h6v2.5H5zM11 6H5c-1.1 0-2 .9-2 2v3h2v3h6v-3h2V8c0-1.1-.9-2-2-2zm-1 7H6v-3h4v3zm1-4.2c-.4 0-.8-.3-.8-.8s.3-.8.8-.8.8.3.8.8-.4.8-.8.8z" })
		)
	);
};

exports.default = Print;