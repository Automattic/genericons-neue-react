"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Share = function Share(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M7 4.4V10h2V4.4l1.1 1.1 1.4-1.4L8 .6 4.5 4.1l1.4 1.4L7 4.4zM12 6h-2v1.5h2c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h2V6H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" })
		)
	);
};

exports.default = Share;