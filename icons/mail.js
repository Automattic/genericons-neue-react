"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mail = function Mail(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 3H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm1 3.2L8 9.1 3 6.2V5l5 2.9L13 5v1.2z" })
		)
	);
};

exports.default = Mail;