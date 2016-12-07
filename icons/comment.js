"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comment = function Comment(props) {
	return _react2.default.createElement(
		"svg",
		{ viewBox: "0 0 16 16" },
		_react2.default.createElement("rect", { x: "0", fill: "none", width: "16", height: "16" }),
		_react2.default.createElement(
			"g",
			props,
			_react2.default.createElement("path", { d: "M12 4H4c-1.1 0-2 .9-2 2v8l2.4-2.4c.4-.4.9-.6 1.4-.6H12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" })
		)
	);
};

exports.default = Comment;