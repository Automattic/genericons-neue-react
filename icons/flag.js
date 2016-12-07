"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flag = function Flag(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M9.4 4.4l-.8-.8c-.4-.4-.9-.6-1.4-.6H3v11h2v-4h2.2c.5 0 1 .2 1.4.6l.8.8c.4.4.9.6 1.4.6H13V5h-2.2c-.5 0-1-.2-1.4-.6z" })
		)
	);
};

exports.default = Flag;