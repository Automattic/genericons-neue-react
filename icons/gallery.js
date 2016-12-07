"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gallery = function Gallery(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 10V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2zM5.5 7l1.1 1.6 1.5-2.4L10 10H4l1.5-3zM13 5v8H5c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" })
		)
	);
};

exports.default = Gallery;