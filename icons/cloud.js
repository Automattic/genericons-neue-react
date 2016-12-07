"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cloud = function Cloud(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M13 8h-.2c.1-.3.2-.6.2-1 0-1.7-1.3-3-3-3-1.2 0-2.2.7-2.7 1.7-.5-.4-1.1-.7-1.8-.7C4.1 5 3 6.1 3 7.5c0 .2 0 .3.1.5H3c-1.1 0-2 .9-2 2s.9 2 2 2h10c1.1 0 2-.9 2-2s-.9-2-2-2z" })
		)
	);
};

exports.default = Cloud;