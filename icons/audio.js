"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Audio = function Audio(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M7.3 2.7L4 6H2v4h2l3.3 3.3c.6.6 1.7.2 1.7-.7V3.4c0-.9-1.1-1.3-1.7-.7zM13 3l-.7.7C13.3 4.8 14 6.3 14 8s-.7 3.2-1.8 4.2l.7.7c1.3-1.3 2.1-3 2.1-5 0-1.9-.8-3.6-2-4.9zm-1.5 1.5l-.7.7c.8.7 1.2 1.7 1.2 2.8s-.5 2.1-1.2 2.8l.7.7c.9-.9 1.5-2.1 1.5-3.5s-.6-2.6-1.5-3.5z" })
		)
	);
};

exports.default = Audio;