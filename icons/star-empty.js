"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StarEmpty = function StarEmpty(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M8 5l.7 1.5.3.8.9.1 1.6.2-1.2 1.1-.7.5.2.8.3 1.6-1.4-.8-.7-.4-.7.4-1.4.8.3-1.6.2-.8-.7-.5-1.2-1.1 1.6-.2.9-.1.4-.8L8 5m0-3.7L6 5.9l-5 .5 3.7 3.3-1 4.9L8 12.2l4.3 2.5-1-4.9L15 6.4l-5-.5-2-4.6z" })
		)
	);
};

exports.default = StarEmpty;