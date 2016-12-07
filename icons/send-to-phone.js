"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SendToPhone = function SendToPhone(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M6 10l3-3-3-3v2H2v2h4v2zm4-9H6c-1.1 0-2 .9-2 2v2h1V3h6v9H5V9H4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM8.5 14h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5s-.2.5-.5.5z" })
		)
	);
};

exports.default = SendToPhone;