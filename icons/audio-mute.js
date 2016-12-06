"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioMute = function AudioMute(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M7.3 2.7L4 6H2v4h2l3.3 3.3c.6.6 1.7.2 1.7-.7V3.4c0-.9-1.1-1.3-1.7-.7z" })
		)
	);
};

exports.default = AudioMute;