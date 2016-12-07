"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Show = function Show(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M14.8 7.6c-1.4-2.4-4-3.9-6.8-3.9S2.6 5.2 1.2 7.6L1 8l.2.4c1.4 2.4 4 3.9 6.8 3.9s5.4-1.5 6.8-3.9L15 8l-.2-.4zM8 10.8c-2.1 0-4-1.1-5.2-2.8.9-1.4 2.3-2.3 3.9-2.6-.7.4-1.2 1.2-1.2 2.1C5.5 8.9 6.6 10 8 10s2.5-1.1 2.5-2.5c0-.9-.5-1.7-1.2-2.1 1.6.3 3 1.3 3.9 2.6-1.2 1.7-3.1 2.8-5.2 2.8z" })
		)
	);
};

exports.default = Show;