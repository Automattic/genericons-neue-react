"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hide = function Hide(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M14.8 7.6c-.4-.6-.8-1.2-1.3-1.7L12.4 7c.3.3.6.6.8 1-1 1.5-2.7 2.5-4.5 2.7l-1.5 1.5c.3 0 .6.1.8.1 2.8 0 5.4-1.5 6.8-3.9L15 8l-.2-.4zm-2.5-5.3l-1.8 1.8c-.8-.2-1.6-.4-2.5-.4-2.8 0-5.4 1.5-6.8 3.9L1 8l.2.4c.6 1 1.4 1.9 2.4 2.6l-1.3 1.3 1.4 1.4 10-10-1.4-1.4zM5.5 7.5c0 .5.1.9.3 1.2l-1 1.1c-.8-.4-1.5-1-2-1.8.9-1.4 2.3-2.3 3.9-2.6-.7.4-1.2 1.2-1.2 2.1z" })
		)
	);
};

exports.default = Hide;