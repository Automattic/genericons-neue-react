"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fullscreen = function Fullscreen(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M10 2v2h3v3h2V2h-5zM1 7h2V4h3V2H1v5zm12 5h-3v2h5V9h-2v3zM3 9H1v5h5v-2H3V9z" })
		)
	);
};

exports.default = Fullscreen;