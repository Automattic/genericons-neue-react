"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function Location(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M11.5 3.5c-2-2-5.1-2-7.1 0s-2 5.1 0 7.1L8 14.1l3.5-3.5c2-2 2-5.2 0-7.1zM9.4 8.4c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8z" })
		)
	);
};

exports.default = Location;