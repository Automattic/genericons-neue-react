"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M13 4h-3c-1.1 0-2 .9-2 2v.8H7V6c0-1.1-.9-2-2-2H2C.9 4 0 4.9 0 6v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-.8h1V9c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5.5 9c0 .3-.2.5-.5.5H2c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v.8H5c-.4 0-.8.3-.8.8s.4.6.8.6h.5V9zm8 0c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-.8h.5c.4 0 .8-.3.8-.8s-.4-.6-.8-.6h-.5V6c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z" })
		)
	);
};

exports.default = Link;