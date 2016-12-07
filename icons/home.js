"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M7.4 3.5l-4 3.2c-.3.2-.4.5-.4.8V13h3.5v-2.5C6.5 9.7 7.2 9 8 9s1.5.7 1.5 1.5V13H13V7.5c0-.3-.1-.6-.4-.8l-4-3.2c-.3-.3-.9-.3-1.2 0z" })
		)
	);
};

exports.default = Home;