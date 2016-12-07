"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Refresh = function Refresh(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M3.8 3.8C2.7 4.9 2 6.3 2 8c0 3 2.2 5.4 5 5.9v-2.1c-1.7-.4-3-2-3-3.9 0-1.1.5-2.1 1.2-2.8L7 7V2H2l1.8 1.8zM14 8c0-3-2.2-5.4-5-5.9v2.1c1.7.4 3 2 3 3.9 0 1.1-.5 2.1-1.2 2.8L9.1 9.1 9 9v5h5l-1.8-1.8C13.3 11.1 14 9.7 14 8z" })
		)
	);
};

exports.default = Refresh;