"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var External = function External(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 3v2h1.6L6.3 8.3l1.4 1.4L11 6.4V8h2V3H8zm3.5 8c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h2V3H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9h-1.5v2z" })
		)
	);
};

exports.default = External;