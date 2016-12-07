"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ellipsis = function Ellipsis(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M2 6.2C1 6.2.2 7 .2 8S1 9.8 2 9.8 3.8 9 3.8 8 3 6.2 2 6.2zm12 0c-1 0-1.8.8-1.8 1.8S13 9.8 14 9.8 15.8 9 15.8 8 15 6.2 14 6.2zm-6 0C7 6.2 6.2 7 6.2 8S7 9.8 8 9.8 9.8 9 9.8 8 9 6.2 8 6.2z" })
		)
	);
};

exports.default = Ellipsis;