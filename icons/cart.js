"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cart = function Cart(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M11 12c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-6 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm6-2H5V9h5.6c.8 0 1.5-.5 1.9-1.3L14 4H5V3c0-.6-.4-1-1-1H2v1h2v7c0 .6.4 1 1 1h7c0-.6-.4-1-1-1z" })
		)
	);
};

exports.default = Cart;