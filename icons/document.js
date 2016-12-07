"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Document = function Document(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M10 1H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4l-3-3zm1.5 11c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V3c0-.3.2-.5.5-.5h3V4c0 1.1.9 2 2 2h1.5v6z" })
		)
	);
};

exports.default = Document;