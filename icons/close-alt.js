"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseAlt = function CloseAlt(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M14.7 2.7l-1.4-1.4L8 6.6 2.7 1.3 1.3 2.7 6.6 8l-5.3 5.3 1.4 1.4L8 9.4l5.3 5.3 1.4-1.4L9.4 8" })
		)
	);
};

exports.default = CloseAlt;